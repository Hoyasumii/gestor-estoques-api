import type {
	CategoryDTO,
	CreateCategoryDTO,
	DeleteCategoryDTO,
	CategoryIdDTO,
	UpdateCategoryDTO,
} from "@/dtos/category";

export interface CategoryRepositoryInterface {
	get length(): number;

	create(data: CreateCategoryDTO): Promise<CategoryIdDTO>;
	getAll(limit?: number, page?: number): Promise<Array<CategoryDTO>>;
	getParentById(data: CategoryIdDTO): Promise<CategoryDTO | undefined>;
	exists(data: CategoryIdDTO): Promise<boolean>;
	hasChildren(data: CategoryIdDTO): Promise<boolean>;
	update(data: UpdateCategoryDTO): Promise<boolean>;
	delete(data: DeleteCategoryDTO): Promise<boolean>;
}
