import type { CategoryModel } from "@/models/category";
import { InMemoryRepository } from "@/repositories/in-memory-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { CategoryHasChildren } from "./category-has-children";
import { makeCategory } from "@/factories/dev/entities";

class Dep extends InMemoryRepository<CategoryModel> {}

let repo: Dep;
let sut: CategoryHasChildren;

describe("Testing if Category has Children <<in-memory>>", () => {
	beforeEach(() => {
		repo = new Dep();
		sut = new CategoryHasChildren(repo);
	});

	it("should gives true if an category has children in database", async () => {
		const targetCategory = makeCategory();
		const childrenCategory = makeCategory(targetCategory.id);

		repo.data.push(targetCategory, childrenCategory);

		await expect(sut.run(targetCategory.id)).resolves.toBeTruthy();
		await expect(sut.run(childrenCategory.id)).resolves.toBeFalsy();
	});

	it("should gives falsy if an category hasn't children in database", async () => {
		const targetCategory = makeCategory();

		repo.data.push(targetCategory);

		await expect(sut.run(targetCategory.id)).resolves.toBeFalsy();
	});
});
