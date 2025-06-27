import type { CategoryModel } from "@/dtos/category";
import { faker } from "@faker-js/faker";
import { randomUUID } from "node:crypto";

export function makeCategory(parentId?: string): CategoryModel {
	return {
		id: randomUUID(),
		name: faker.commerce.product(),
		categoryFrom: parentId,
	};
}
