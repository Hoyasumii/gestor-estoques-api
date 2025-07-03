import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { CommandObject } from "g/types";
import type { CategoryModel } from "@/models";

export class GetAllCategory
	implements CommandObject<unknown, Array<CategoryModel>>
{
	constructor(private repository: InMemoryRepository<CategoryModel>) {}

	async run(limit?: number, page?: number): Promise<Array<CategoryModel>> {
		const data = this.repository.data;

		if (!limit) return data;

		const safePage = page && page > 0 ? page : 0;
		return data.slice(safePage * limit, (safePage + 1) * limit);
	}
}
