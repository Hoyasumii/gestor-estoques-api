import type { CategoryIdDTO } from "@/dtos/category";
import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { CommandObject } from "g/types";
import type { CategoryModel } from "@/models";

export class CategoryHasChildren
	implements CommandObject<CategoryIdDTO, boolean>
{
	constructor(private repository: InMemoryRepository<CategoryModel>) {}

	async run(data: CategoryIdDTO): Promise<boolean> {
		return (
			this.repository.data.findIndex(
				(target) => target.categoryFrom === data,
			) !== -1
		);
	}
}
