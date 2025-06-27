import type { CategoryIdDTO } from "@/dtos/category";
import type { CategoryRepositoryInterface } from "@/repositories";
import type { Service } from "g/types";

export class CheckCategoryService implements Service<CategoryRepositoryInterface, CategoryIdDTO, boolean> {

}