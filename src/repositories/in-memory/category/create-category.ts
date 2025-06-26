import type { CategoryModel, CreateCategoryModel } from "@/models/category";
import type { InMemoryRepository } from "@/repositories/in-memory-repository";
import type { Service } from "g/types";
import { randomUUID, type UUID } from "node:crypto";

export class CreateCategory
	implements Service<never, CreateCategoryModel, UUID>
{
	constructor(private repository: InMemoryRepository<CategoryModel>) {}

	async run(data: CreateCategoryModel): Promise<UUID> {
		const newCategoryId = randomUUID();

		this.repository.data.push({ ...data, id: newCategoryId });

		return newCategoryId;
	}
}
