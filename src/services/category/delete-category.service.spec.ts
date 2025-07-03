import { beforeEach, describe, expect, it } from "vitest";
import { CategoryRepository } from "~/test/repositories/category";
import { DeleteCategoryService } from "./delete-category.service";
import { makeCategory } from "~/test/factories/entities";

let repo: CategoryRepository;
let sut: DeleteCategoryService;

describe("Testing Delete Category Service", async () => {
	beforeEach(() => {
		repo = new CategoryRepository();
		sut = new DeleteCategoryService(repo);
	});

	it("should delete an existent category", async () => {
		const { id: _, ...category } = makeCategory();

		const categoryId = await repo.create(category);

		await expect(
			sut.run({ id: categoryId, recursive: false }),
		).resolves.toBeTruthy();
	});

	it("should not delete an category with childrens", async () => {
		const parentCategory = makeCategory();

		const categoryId = await repo.create(parentCategory);

		const childrenCategory = makeCategory(categoryId);
		await repo.create(childrenCategory);

		await expect(
			sut.run({ id: categoryId, recursive: false }),
		).resolves.toBeFalsy();
	});

	it("should delete an category and their children's", async () => {
		const parentCategory = makeCategory();

		const categoryId = await repo.create(parentCategory);
		await repo.create(makeCategory());

		for (let index = 0; index < 5; index++) {
			const children0 = makeCategory(categoryId);
			const children0Id = await repo.create(children0);

			const children1 = makeCategory(children0Id);
			await repo.create(children1);
		}

		expect(repo.length).toBe(12);
		await expect(
			sut.run({ id: categoryId, recursive: true }),
		).resolves.toBeTruthy();
		expect(repo.length).toBe(1);
	});
});
