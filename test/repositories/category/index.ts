import type {
	CategoryIdDTO,
	CreateCategoryDTO,
	UpdateCategoryDTO,
} from "@/dtos/category";
import type { CategoryRepositoryInterface } from "@/repositories/category-repository-interface";
import { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import { CreateCategory } from "./create-category";
import { CategoryExists } from "./category-exists";
import { CategoryHasChildren } from "./category-has-children";
import { GetAllCategory } from "./get-all-category";
import { UpdateCategory } from "./update-category";
import { DeleteCategory } from "./delete-category";
import type { CategoryModel } from "@/models";
import { GetCategory } from "./get-category";
import { GetNearChildren } from "./get-near-children";

export class CategoryRepository
	extends InMemoryRepository<CategoryModel>
	implements CategoryRepositoryInterface
{
	get length(): number {
		return this.data.length;
	}

	async create(data: CreateCategoryDTO) {
		return await new CreateCategory(this).run(data);
	}

	async exists(data: CategoryIdDTO) {
		return await new CategoryExists(this).run(data);
	}

	async hasChildren(data: CategoryIdDTO) {
		return await new CategoryHasChildren(this).run(data);
	}

	async get(id: CategoryIdDTO): Promise<CategoryModel | undefined> {
		return await new GetCategory(this).run(id);
	}

	async getAll(limit?: number, page?: number) {
		return await new GetAllCategory(this).run(limit, page);
	}

	async getNearChildren(id: CategoryIdDTO): Promise<CategoryModel | undefined> {
		return await new GetNearChildren(this).run(id);
	}

	async update(data: UpdateCategoryDTO) {
		return await new UpdateCategory(this).run(data);
	}

	async delete(data: CategoryIdDTO) {
		return await new DeleteCategory(this).run(data);
	}
}
