import { CreateCategoryDTO } from "@/dtos/category";
import { BadRequestError } from "@/errors";
import { CategoryModel } from "@/models";
import type { CategoryRepositoryInterface } from "@/repositories";
import { Service } from "g/abstract-classes";

export class CreateCategoryService extends Service<
	CategoryRepositoryInterface,
	CreateCategoryDTO,
	CategoryModel
> {
	async run(data: CreateCategoryDTO): Promise<CategoryModel> {
		const { success } = CreateCategoryDTO.safeParse(data);

		if (!success) throw new BadRequestError();

		const id = await this.repository.create(data);

		return CategoryModel.build({ id, ...data });
	}
}
