import type {
	CategoryDTO,
	CreateCategoryDTO,
	DeleteCategoryDTO,
	CategoryIdDTO,
	UpdateCategoryDTO,
} from "@/dtos/category";
import type { CategoryModel } from "@/models";

export interface CategoryRepositoryInterface {
	get length(): number;

	create(data: CreateCategoryDTO): Promise<CategoryIdDTO>;
	get(id: CategoryIdDTO): Promise<CategoryModel | undefined>;
	getAll(limit?: number, page?: number): Promise<Array<CategoryDTO>>;
	getParentById(data: CategoryIdDTO): Promise<CategoryDTO | undefined>;
	getNearChildren(id: CategoryIdDTO): Promise<CategoryModel | undefined>;
	exists(data: CategoryIdDTO): Promise<boolean>;
	hasChildren(data: CategoryIdDTO): Promise<boolean>;
	update(data: UpdateCategoryDTO): Promise<boolean>;
	delete(data: DeleteCategoryDTO): Promise<boolean>;
}
