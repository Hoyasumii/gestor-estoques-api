import type { CategoryModel } from "@/dtos/category";
import { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import { GetAllCategory } from "./get-all-category";
import { beforeEach, describe, expect, it } from "vitest";
import { makeCategory } from "t/factories/entities";

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
			dependency.data.push(makeCategory());
		}

		const content = await sut.run();

		expect(content.length).toBe(5);
	});

	it("should get pages 1 and 2 with limit defined by 5", async () => {
		for (let index = 0; index < 9; index++) {
			dependency.data.push(makeCategory());
		}

		const firstPage = await sut.run(5, 0);
		const secondPage = await sut.run(5, 1);

		expect(firstPage.length).toBe(5);
		expect(secondPage.length).toBe(4);

		expect(firstPage).toMatchObject(dependency.data.slice(0, 5));
		expect(secondPage).toMatchObject(dependency.data.slice(5, 10));
	});
});
