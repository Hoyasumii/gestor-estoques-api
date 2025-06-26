import type { UpdateCategoryModel, CategoryModel } from "@/models/category";
import type { InMemoryRepository } from "@/repositories/in-memory-repository";
import type { Service } from "g/types";

export class UpdateCategory
	implements Service<never, UpdateCategoryModel, boolean>
{
	constructor(private repository: InMemoryRepository<CategoryModel>) {}

	async run({ id, ...content }: UpdateCategoryModel): Promise<boolean> {
		const targetCategoryIndex = this.repository.data.findIndex(
			(target) => target.id === id,
		);

		if (targetCategoryIndex === -1) return false;

		this.repository.data[targetCategoryIndex] = {
			...this.repository.data[targetCategoryIndex],
			...content,
		};

		return true;
	}
}
