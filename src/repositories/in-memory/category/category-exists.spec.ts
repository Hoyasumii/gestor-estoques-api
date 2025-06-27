import type { CategoryModel } from "@/models/category";
import { InMemoryRepository } from "@/repositories/in-memory-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { CategoryExists } from "./category-exists";
import { makeCategory } from "@/factories/dev/entities";

class Dep extends InMemoryRepository<CategoryModel> {}

let repo: Dep;
let sut: CategoryExists;

describe("Testing if Category Exists <<in-memory>>", () => {
	beforeEach(() => {
		repo = new Dep();
		sut = new CategoryExists(repo);
	});

	it("should gives true if an category exists in database", async () => {
		const targetCategory = makeCategory();

		repo.data.push(targetCategory);

		await expect(sut.run(targetCategory.id)).resolves.toBeTruthy();
	});

	it("should gives falsy if an category not exists in database", async () => {
		const targetCategory = makeCategory();

		await expect(sut.run(targetCategory.id)).resolves.toBeFalsy();
	});
});
