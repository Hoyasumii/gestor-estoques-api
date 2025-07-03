import { CreateCategoryDTO } from "@/dtos/category";
import { BadRequestError } from "@/errors";
import { CategoryModel } from "@/models";
import type { CategoryRepositoryInterface } from "@/repositories";
import type { Service } from "g/types";

export class CreateCategoryService
	implements
		Service<CategoryRepositoryInterface, CreateCategoryDTO, CategoryModel>
{
	constructor(private repository: CategoryRepositoryInterface) {}

	async run(data: CreateCategoryDTO): Promise<CategoryModel> {
		const { success } = CreateCategoryDTO.safeParse(data);

		if (!success) throw new BadRequestError();

		const id = await this.repository.create(data);

		return CategoryModel.build({ id, ...data });
	}
}
