import type { CategoryIdDTO, CategoryDTO } from "@/dtos/category";
import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { Service } from "g/types";

export class GetParentByCategoryId
	implements Service<never, CategoryIdDTO, CategoryDTO | undefined>
{
	constructor(private repository: InMemoryRepository<CategoryDTO>) {}

	async run(data: CategoryIdDTO): Promise<CategoryDTO | undefined> {
		return this.repository.data.find((target) => target.id === data);
	}
}
