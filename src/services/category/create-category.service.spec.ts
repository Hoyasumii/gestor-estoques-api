import { beforeEach, describe, expect, it } from "vitest";
import { CreateCategoryService } from "./create-category.service";
import { CategoryRepository } from "~/test/repositories/category";
import { CategoryIdDTO, type CreateCategoryDTO } from "@/dtos/category";
import { faker } from "@faker-js/faker";
import { BadRequestError } from "@/errors";

let repo: CategoryRepository;
let sut: CreateCategoryService;

describe("Testing Create Category Service", () => {
	beforeEach(() => {
		repo = new CategoryRepository();
		sut = new CreateCategoryService(repo);
	});

	it("should create a new category", async () => {
		const newCategory: CreateCategoryDTO = {
			name: faker.commerce.product(),
		};

		await expect(sut.run(newCategory)).resolves.toBeTypeOf("string");
	});

	it(
		"should create a new category and recieves an valid UUID",
		async () => {
			const newCategory: CreateCategoryDTO = {
				name: faker.commerce.product(),
			};

			const newCategoryId = await sut.run(newCategory);

			expect(CategoryIdDTO.safeParse(newCategoryId).success).toBeTruthy();
		},
	);

	it("should not create an invalid category", async () => {
		await expect(sut.run({ name: "" })).rejects.toBeInstanceOf(BadRequestError);
	});
});
