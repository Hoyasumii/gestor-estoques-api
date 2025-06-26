import type { CategoryModel } from "@/models/category";
import type { InMemoryRepository } from "@/repositories/in-memory-repository";
import type { Service } from "g/types";

export class GetAllCategory
	implements Service<never, undefined, Array<CategoryModel>>
{
	constructor(private repository: InMemoryRepository<CategoryModel>) {}

	async run(): Promise<Array<CategoryModel>> {
		return this.repository.data;
	}
}
