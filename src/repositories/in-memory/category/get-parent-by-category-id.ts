import type { CategoryIdModel, CategoryModel } from "@/models/category";
import type { InMemoryRepository } from "@/repositories/in-memory-repository";
import type { Service } from "g/types";

export class GetParentByCategoryId
	implements Service<never, CategoryIdModel, CategoryModel | undefined>
{
	constructor(private repository: InMemoryRepository<CategoryModel>) {}

	async run(data: CategoryIdModel): Promise<CategoryModel | undefined> {
		return this.repository.data.find((target) => target.id === data);
	}
}
