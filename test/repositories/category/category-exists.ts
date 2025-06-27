import type { CategoryIdDTO, CategoryDTO } from "@/dtos/category";
import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { Service } from "g/types";

export class CategoryExists
	implements Service<never, CategoryIdDTO, boolean>
{
	constructor(private repository: InMemoryRepository<CategoryDTO>) {}

	async run(data: CategoryIdDTO): Promise<boolean> {
		return (
			this.repository.data.findIndex((target) => target.id === data) !== -1
		);
	}
}
