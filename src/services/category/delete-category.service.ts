import type { CategoryRepositoryInterface } from "@/repositories";
import { Service } from "g/abstract-classes";
import { DeleteCategoryServiceDTO } from "./dtos";
import { BadRequestError, ResourceNotFoundError } from "@/errors";

export class DeleteCategoryService extends Service<
	CategoryRepositoryInterface,
	DeleteCategoryServiceDTO,
	boolean
> {
	async run(data: DeleteCategoryServiceDTO): Promise<boolean> {
		const { success } = DeleteCategoryServiceDTO.safeParse(data);

		if (!success) throw new BadRequestError();

		const { id, recursive } = data;

		if (!(await this.repository.exists(id))) throw new ResourceNotFoundError();

		if (!recursive) {
			const categoryHasChildren = await this.repository.hasChildren(id);

			if (categoryHasChildren) return false;

			return await this.repository.delete(id);
		}

		return await this.recursiveRemoval(id);
	}

	private async recursiveRemoval(target: string): Promise<boolean> {
		const targetChildren = await this.repository.getNearChildren(target);

		if (targetChildren) {
			await this.recursiveRemoval(targetChildren.id);
			return await this.recursiveRemoval(target);
		}

		return await this.repository.delete(target);
	}
}
