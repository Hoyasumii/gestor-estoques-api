import type { CategoryIdModel, CategoryModel } from "@/models/category";
import type { InMemoryRepository } from "@/repositories/in-memory-repository";
import type { Service } from "g/types";

export class CategoryExists
	implements Service<never, CategoryIdModel, boolean>
{
	constructor(private repository: InMemoryRepository<CategoryModel>) {}

	async run(data: CategoryIdModel): Promise<boolean> {
		return (
			this.repository.data.findIndex((target) => target.id === data) !== -1
		);
	}
}
