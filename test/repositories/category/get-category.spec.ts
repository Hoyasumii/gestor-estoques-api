import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryRepository } from "t/repositories";
import type { CategoryDTO } from "@/dtos/category";
import { GetCategory } from "./get-category";
import { makeCategory } from "t/factories/entities";
import { CategoryModel } from "@/models";
import { randomUUID } from "node:crypto";

class Dep extends InMemoryRepository<CategoryDTO> {}

let dependency: Dep;
let sut: GetCategory;

describe("Testing Get Category Method <<in-memory>>", () => {
	beforeEach(() => {
		dependency = new Dep();
		sut = new GetCategory(dependency);
	});

	it("should gives an category by id", async () => {
		const targetCategory = makeCategory();

		dependency.data.push(targetCategory);

		await expect(sut.run(targetCategory.id)).resolves.toBeInstanceOf(
			CategoryModel,
		);
	});

	it("should gives undefined caused by inexistent id", async () => {
		const fakeCategoryId = randomUUID();

		await expect(sut.run(fakeCategoryId)).resolves.toBeUndefined();
	});
});
