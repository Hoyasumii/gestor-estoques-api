import type { CategoryDTO, CategoryIdDTO } from "@/dtos/category";
import { CategoryModel } from "@/models";
import type { CommandObject } from "g/types";
import type { InMemoryRepository } from "t/repositories";

export class GetCategory
	implements CommandObject<CategoryIdDTO, CategoryModel | undefined>
{
	constructor(private repository: InMemoryRepository<CategoryDTO>) {}

	async run(id: CategoryIdDTO): Promise<CategoryModel | undefined> {
		const targetCategory = this.repository.data.find(
			(target) => target.id === id,
		);

		if (!targetCategory) return undefined;

		return CategoryModel.build(targetCategory);
	}
}
