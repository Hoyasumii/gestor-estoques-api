import type { CategoryDTO, CreateCategoryDTO } from "@/dtos/category";
import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { Service } from "g/types";
import { randomUUID, type UUID } from "node:crypto";

export class CreateCategory
	implements Service<never, CreateCategoryDTO, UUID>
{
	constructor(private repository: InMemoryRepository<CategoryDTO>) {}

	async run(data: CreateCategoryDTO): Promise<UUID> {
		const newCategoryId = randomUUID();

		this.repository.data.push({ ...data, id: newCategoryId });

		return newCategoryId;
	}
}
