import type { CreateCategoryDTO } from "@/dtos/category";
import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { CommandObject } from "g/types";
import { randomUUID, type UUID } from "node:crypto";
import { CategoryModel } from "@/models";

export class CreateCategory implements CommandObject<CreateCategoryDTO, UUID> {
	constructor(private repository: InMemoryRepository<CategoryModel>) {}

	async run(data: CreateCategoryDTO): Promise<UUID> {
		const newCategoryId = randomUUID();

		this.repository.data.push(
			CategoryModel.build({ ...data, id: newCategoryId }),
		);

		return newCategoryId;
	}
}
