import type { CategoryModel } from "@/dtos/category";
import { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { DeleteCategory } from "./delete-category";
import { makeCategory } from "t/factories/entities";

class Dep extends InMemoryRepository<CategoryModel> {}

let repo: Dep;
let sut: DeleteCategory;

describe("Testing if i can delete an Category <<in-memory>>", () => {
	beforeEach(() => {
		repo = new Dep();
		sut = new DeleteCategory(repo);
	});

	it("should gives true if an category can be removed", async () => {
		const targetCategory = makeCategory();

		repo.data.push(targetCategory);

		await expect(sut.run(targetCategory.id)).resolves.toBeTruthy();
	});

	it("should gives falsy if an category cannot be removed: Cause -> Has Children", async () => {
		const targetCategory = makeCategory();
		const childrenCategory = makeCategory(targetCategory.id);

		repo.data.push(targetCategory, childrenCategory);

		await expect(sut.run(targetCategory.id)).resolves.toBeFalsy();
		expect(repo.data.length).toBe(2);
	});
});
