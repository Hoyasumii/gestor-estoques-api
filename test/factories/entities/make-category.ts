import { CategoryModel } from "@/models";
import { faker } from "@faker-js/faker";
import { randomUUID } from "node:crypto";

export function makeCategory(parentId?: string): CategoryModel {
	return CategoryModel.build({
		id: randomUUID(),
		name: faker.commerce.product(),
		categoryFrom: parentId,
	});
}
