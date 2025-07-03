import type { CategoryRepositoryInterface } from "@/repositories";
import type { Service } from "g/types";
import { DeleteCategoryServiceDTO } from "./dtos";
import { BadRequestError, ResourceNotFoundError } from "@/errors";

export class DeleteCategoryService
	implements
		Service<CategoryRepositoryInterface, DeleteCategoryServiceDTO, boolean>
{
	constructor(private repository: CategoryRepositoryInterface) {}

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

		//

		// this.repository.hasChildren
	}
}
