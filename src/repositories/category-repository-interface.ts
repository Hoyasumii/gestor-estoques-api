import type {
	CreateCategoryDTO,
	CategoryIdDTO,
	UpdateCategoryDTO,
} from "@/dtos/category";
import type { CategoryModel } from "@/models";

export interface CategoryRepositoryInterface {
	get length(): number;

	create(data: CreateCategoryDTO): Promise<CategoryIdDTO>;
	get(id: CategoryIdDTO): Promise<CategoryModel | undefined>;
	getAll(limit?: number, page?: number): Promise<Array<CategoryModel>>;
	getNearChildren(id: CategoryIdDTO): Promise<CategoryModel | undefined>;
	exists(data: CategoryIdDTO): Promise<boolean>;
	hasChildren(data: CategoryIdDTO): Promise<boolean>;
	update(data: UpdateCategoryDTO): Promise<boolean>;
	delete(data: CategoryIdDTO): Promise<boolean>;
}
