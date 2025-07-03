import type { CategoryIdDTO, CategoryDTO } from "@/dtos/category";
import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { CommandObject } from "g/types";

export class CategoryHasChildren
	implements CommandObject<CategoryIdDTO, boolean>
{
	constructor(private repository: InMemoryRepository<CategoryDTO>) {}

	async run(data: CategoryIdDTO): Promise<boolean> {
		return (
			this.repository.data.findIndex(
				(target) => target.categoryFrom === data,
			) !== -1
		);
	}
}
