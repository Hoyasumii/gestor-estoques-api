import type { DeleteCategoryModel, CategoryModel } from "@/dtos/category";
import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { Service } from "g/types";

export class DeleteCategory
	implements Service<never, DeleteCategoryModel, boolean>
{
	constructor(private repository: InMemoryRepository<CategoryModel>) {}

	async run(id: DeleteCategoryModel): Promise<boolean> {
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
