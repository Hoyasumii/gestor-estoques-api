import { beforeEach, describe, expect, it } from "vitest";
import { UpdateCategory } from "./update-category";
import { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import { randomUUID } from "node:crypto";
import { faker } from "@faker-js/faker";
import { makeCategory } from "t/factories/entities";
import type { CategoryModel } from "@/models";

class Dep extends InMemoryRepository<CategoryModel> {}

let repo: Dep;
let sut: UpdateCategory;

describe("Testing Update Category <<in-memory>>", () => {
	beforeEach(() => {
		repo = new Dep();
		sut = new UpdateCategory(repo);
	});

	it("should update an category name", async () => {
		const targetCategory = makeCategory();

		repo.data.push(targetCategory);

		await expect(
			sut.run({ id: targetCategory.id, name: faker.commerce.product() }),
		).resolves.toBeTruthy();

		expect(targetCategory.name).not.toBe(repo.data[0].name);
	});

	it("should not update an invalid category", async () => {
		await expect(
			sut.run({ id: randomUUID(), name: faker.commerce.product() }),
		).resolves.toBeFalsy();
	});
});
