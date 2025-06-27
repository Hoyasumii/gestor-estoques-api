/* 
O que ele faz?
- Cria uma Categoria
*/

import { beforeEach, describe, it } from "vitest";
import { CreateCategoryService } from "./create-category.service";
import { CategoryRepository } from "~/test/repositories/category";

let repo: CategoryRepository;
let sut: CreateCategoryService;

describe("Testing Check Category Service", () => {
	beforeEach(() => {
		repo = new CategoryRepository();
		sut = new CreateCategoryService(repo);
	});

  it.todo("should check if category exists");
});
