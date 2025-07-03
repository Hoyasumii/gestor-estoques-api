import type { UpdateCategoryDTO, CategoryDTO } from "@/dtos/category";
import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { CommandObject } from "g/types";

export class UpdateCategory
	implements CommandObject<UpdateCategoryDTO, boolean>
{
	constructor(private repository: InMemoryRepository<CategoryDTO>) {}

	async run({ id, ...content }: UpdateCategoryDTO): Promise<boolean> {
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
