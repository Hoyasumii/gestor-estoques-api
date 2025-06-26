import type {
	CategoryIdModel,
	CategoryModel,
	CreateCategoryModel,
	DeleteCategoryModel,
	UpdateCategoryModel,
} from "@/models/category";
import type { CategoryRepositoryInterface } from "@/repositories/category-repository-interface";
import { InMemoryRepository } from "@/repositories/in-memory-repository";
import { CreateCategory } from "./create-category";
import { CategoryExists } from "./category-exists";
import { CategoryHasChildren } from "./category-has-children";
import { GetAllCategory } from "./get-all-category";
import { UpdateCategory } from "./update-category";
import { DeleteCategory } from "./delete-category";
import { GetParentByCategoryId } from "./get-parent-by-category-id";

export class CategoryRepository
	extends InMemoryRepository<CategoryModel>
	implements CategoryRepositoryInterface
{
	private createCategory: CreateCategory;
	private categoryExists: CategoryExists;
	private categoryHasChildren: CategoryHasChildren;
	private getAllCategory: GetAllCategory;
	private getParentByCategoryId: GetParentByCategoryId;
	private updateCategory: UpdateCategory;
	private deleteCategory: DeleteCategory;

	constructor() {
		super();

		this.createCategory = new CreateCategory(this);
		this.categoryExists = new CategoryExists(this);
		this.categoryHasChildren = new CategoryHasChildren(this);
		this.getAllCategory = new GetAllCategory(this);
		this.getParentByCategoryId = new GetParentByCategoryId(this);
		this.updateCategory = new UpdateCategory(this);
		this.deleteCategory = new DeleteCategory(this);
	}

	async create(data: CreateCategoryModel): Promise<CategoryIdModel> {
		return await this.createCategory.run(data);
	}

	async getAll(): Promise<Array<CategoryModel>> {
		return await this.getAllCategory.run();
	}

	async exists(data: CategoryIdModel): Promise<boolean> {
		return await this.categoryExists.run(data);
	}

	async hasChildren(data: CategoryIdModel): Promise<boolean> {
		return await this.categoryHasChildren.run(data);
	}

	async getParentById(
		data: CategoryIdModel,
	): Promise<CategoryModel | undefined> {
		return await this.getParentByCategoryId.run(data);
	}

	async update(data: UpdateCategoryModel): Promise<boolean> {
		return await this.updateCategory.run(data);
	}

	async delete(data: DeleteCategoryModel): Promise<boolean> {
		return await this.deleteCategory.run(data);
	}
}
