import type { DeleteCategoryDTO, CategoryDTO } from "@/dtos/category";
import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { Service } from "g/types";

export class DeleteCategory
	implements Service<never, DeleteCategoryDTO, boolean>
{
	constructor(private repository: InMemoryRepository<CategoryDTO>) {}

	async run(id: DeleteCategoryDTO): Promise<boolean> {
		const childrenIndex = this.repository.data.findIndex(
			(target) => target.categoryFrom === id,
		);

		if (childrenIndex === -1) {
			this.repository.data = this.repository.data.filter(
				(target) => target.id !== id,
			);

			return true;
		}

		return false;
	}
}
