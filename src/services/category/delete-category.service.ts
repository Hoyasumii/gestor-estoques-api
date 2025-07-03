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

		let nearChildren = await this.repository.getNearChildren(id);

		while (nearChildren) {
			nearChildren = await this.repository.getNearChildren(id);
		}

		// this.repository.hasChildren
	}
}

// Pai -> Verificar se tem Children
// Se tiver -> Verificar se o children tem children [REPETE até que não tenha]
// Se não tiver -> Remove.
