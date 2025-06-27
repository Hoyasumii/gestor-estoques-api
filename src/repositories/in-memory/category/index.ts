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
	create = new CreateCategory(this).run;
	exists = new CategoryExists(this).run;
	hasChildren = new CategoryHasChildren(this).run;
	getAll = new GetAllCategory(this).run;
	getParentById = new GetParentByCategoryId(this).run;
	update = new UpdateCategory(this).run;
	delete = new DeleteCategory(this).run;
}
