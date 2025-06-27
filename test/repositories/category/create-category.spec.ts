import { beforeEach, describe, expect, it } from "vitest";
import { CreateCategory } from "./create-category";
import { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { CategoryModel } from "@/dtos/category";

class Dep extends InMemoryRepository<CategoryModel> {}

let dependency: Dep;
let sut: CreateCategory;

describe("Testing Create Category Method <<in-memory>>", () => {
	beforeEach(() => {
		dependency = new Dep();
		sut = new CreateCategory(dependency);
	});

	it("should create an category", async () => {
		await expect(sut.run({ name: "Smartphone" })).resolves.toBeTypeOf("string");
		expect(dependency.data.length).toBe(1);
	});

	it("should create a category linked to another", async () => {
		const toysCategoryId = await sut.run({ name: "Toys" });

		const cardGameCategoryId = await sut.run({
			name: "Card Games",
			categoryFrom: toysCategoryId,
		});

		const cardGameCategory = dependency.data.find(
			(target) => target.id === cardGameCategoryId,
		);

		expect(dependency.data.length).toBe(2);
		expect(cardGameCategory?.categoryFrom).toBe(toysCategoryId);
	});
});
