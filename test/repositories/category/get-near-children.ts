import type { CategoryDTO, CategoryIdDTO } from "@/dtos/category";
import { CategoryModel } from "@/models";
import type { CommandObject } from "g/types";
import type { InMemoryRepository } from "t/repositories";

export class GetNearChildren
	implements CommandObject<CategoryIdDTO, CategoryModel | undefined>
{
	constructor(private repository: InMemoryRepository<CategoryDTO>) {}

	async run(parentId: CategoryIdDTO): Promise<CategoryModel | undefined> {
		const targetChildren = this.repository.data.find(
			(target) => target.categoryFrom === parentId,
		);

		return !targetChildren ? undefined : CategoryModel.build(targetChildren);
	}
}
