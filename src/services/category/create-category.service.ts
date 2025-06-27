import { CategoryIdDTO, CreateCategoryDTO } from "@/dtos/category";
import type { CategoryRepositoryInterface } from "@/repositories";
import type { Service } from "g/types";

export class CreateCategoryService implements Service<CategoryRepositoryInterface, CreateCategoryDTO, CategoryIdDTO> {
  constructor(private repository: CategoryRepositoryInterface) {}

  async run(data: CreateCategoryDTO): Promise<CategoryIdDTO> {
    CreateCategoryDTO.safeParse(data);
  }
}