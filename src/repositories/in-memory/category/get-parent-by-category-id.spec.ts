import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryRepository } from "@/repositories/in-memory-repository";
import type { CategoryModel } from "@/models/category";
import { randomUUID } from "node:crypto";
import { faker } from "@faker-js/faker";
import { GetParentByCategoryId } from "./get-parent-by-category-id";

class Dep extends InMemoryRepository<CategoryModel> {}

let repo: Dep;
let sut: GetParentByCategoryId;

describe("Testing Get Parent by Category Id <<in-memory>>", () => {
	beforeEach(() => {
		repo = new Dep();
		sut = new GetParentByCategoryId(repo);
	});

	it("should get Parent Name", async () => {
		const parentCategory: CategoryModel = {
			id: randomUUID(),
			name: faker.commerce.product(),
		};

		const targetCategory: CategoryModel = {
			id: randomUUID(),
			name: faker.commerce.product(),
			categoryFrom: parentCategory.id,
		};

		repo.data.push(parentCategory);
		repo.data.push(targetCategory);

		const gettingParentCategory = await sut.run(targetCategory.categoryFrom!);

		expect(gettingParentCategory?.id).toBe(targetCategory.categoryFrom);
	});
});
