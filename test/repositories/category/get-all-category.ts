import type { CategoryDTO } from "@/dtos/category";
import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { CommandObject } from "g/types";

export class GetAllCategory
	implements CommandObject<unknown, Array<CategoryDTO>>
{
	constructor(private repository: InMemoryRepository<CategoryDTO>) {}

	async run(limit?: number, page?: number): Promise<Array<CategoryDTO>> {
		const data = this.repository.data;

		if (!limit) return data;

		const safePage = page && page > 0 ? page : 0;
		return data.slice(safePage * limit, (safePage + 1) * limit);
	}
}
