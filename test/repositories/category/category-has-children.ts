import type { CategoryIdModel, CategoryModel } from "@/dtos/category";
import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { Service } from "g/types";

export class CategoryHasChildren
	implements Service<never, CategoryIdModel, boolean>
{
	constructor(private repository: InMemoryRepository<CategoryModel>) {}

	async run(data: CategoryIdModel): Promise<boolean> {
		return (
			this.repository.data.findIndex(
				(target) => target.categoryFrom === data,
			) !== -1
		);
	}
}
