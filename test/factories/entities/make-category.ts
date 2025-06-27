import type { CategoryDTO } from "@/dtos/category";
import { faker } from "@faker-js/faker";
import { randomUUID } from "node:crypto";

export function makeCategory(parentId?: string): CategoryDTO {
	return {
		id: randomUUID(),
		name: faker.commerce.product(),
		categoryFrom: parentId,
	};
}
