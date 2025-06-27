import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { CategoryModel } from "@/dtos/category";
import { GetParentByCategoryId } from "./get-parent-by-category-id";
import { makeCategory } from "t/factories/entities";

class Dep extends InMemoryRepository<CategoryModel> {}

let repo: Dep;
let sut: GetParentByCategoryId;

describe("Testing Get Parent by Category Id <<in-memory>>", () => {
	beforeEach(() => {
		repo = new Dep();
		sut = new GetParentByCategoryId(repo);
	});

	it("should get Parent Name", async () => {
		const parentCategory = makeCategory();
		const targetCategory = makeCategory(parentCategory.id);

		repo.data.push(parentCategory);
		repo.data.push(targetCategory);

		const gettingParentCategory = await sut.run(targetCategory.categoryFrom!);

		expect(gettingParentCategory?.id).toBe(targetCategory.categoryFrom);
	});
});
