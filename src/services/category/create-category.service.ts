import { CategoryIdDTO, CreateCategoryDTO } from "@/dtos/category";
import { BadRequestError } from "@/errors";
import type { CategoryRepositoryInterface } from "@/repositories";
import type { Service } from "g/types";

export class CreateCategoryService
	implements
		Service<CategoryRepositoryInterface, CreateCategoryDTO, CategoryIdDTO>
{
	constructor(private repository: CategoryRepositoryInterface) {}

	async run(data: CreateCategoryDTO): Promise<CategoryIdDTO> {
		const { success } = CreateCategoryDTO.safeParse(data);

		if (!success) throw new BadRequestError();

		const categoryId = await this.repository.create(data);

		return categoryId;
	}
}
