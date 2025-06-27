import type { CategoryModel } from "@/models/category";
import { InMemoryRepository } from "@/repositories/in-memory-repository";
import { GetAllCategory } from "./get-all-category";
import { beforeEach, describe, expect, it } from "vitest";
import { randomUUID } from "node:crypto";
import { faker } from "@faker-js/faker";

class Dep extends InMemoryRepository<CategoryModel> {}

let dependency: Dep;
let sut: GetAllCategory;

describe("Testing Get All Category Method <<in-memory>>", () => {
	beforeEach(() => {
		dependency = new Dep();
		sut = new GetAllCategory(dependency);
	});

	it("should get all categories", async () => {
		for (let index = 0; index < 5; index++) {
			dependency.data.push({
				id: randomUUID(),
				name: faker.commerce.productName(),
			});
		}

		const content = await sut.run();

		expect(content.length).toBe(5);
	});
});
