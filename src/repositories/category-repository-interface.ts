import type {
	CategoryModel,
	CreateCategoryModel,
	DeleteCategoryModel,
	CategoryIdModel,
	UpdateCategoryModel,
} from "@/models/category";

export interface CategoryRepositoryInterface {
	get length(): number;
	
	create(data: CreateCategoryModel): Promise<CategoryIdModel>;
	getAll(limit?: number, page?: number): Promise<Array<CategoryModel>>;
	getParentById(data: CategoryIdModel): Promise<CategoryModel | undefined>;
	exists(data: CategoryIdModel): Promise<boolean>;
	hasChildren(data: CategoryIdModel): Promise<boolean>;
	update(data: UpdateCategoryModel): Promise<boolean>;
	delete(data: DeleteCategoryModel): Promise<boolean>;
}
