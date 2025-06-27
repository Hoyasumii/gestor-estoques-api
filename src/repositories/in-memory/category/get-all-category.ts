import type { CategoryModel } from "@/models/category";
import type { InMemoryRepository } from "@/repositories/in-memory-repository";
import type { Service } from "g/types";

export class GetAllCategory
	implements Service<never, unknown, Array<CategoryModel>>
{
	constructor(private repository: InMemoryRepository<CategoryModel>) {}

	async run(limit?: number, page?: number): Promise<Array<CategoryModel>> {
		const data = this.repository.data;

		if (!limit) return data;

		const safePage = page && page > 0 ? page : 0;
		return data.slice(safePage * limit, (safePage + 1) * limit);
	}
}
