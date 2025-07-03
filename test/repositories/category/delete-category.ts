import type { CategoryIdDTO } from "@/dtos/category";
import type { InMemoryRepository } from "~/test/repositories/in-memory-repository";
import type { CommandObject } from "g/types";
import type { CategoryModel } from "@/models";

export class DeleteCategory implements CommandObject<CategoryIdDTO, boolean> {
	constructor(private repository: InMemoryRepository<CategoryModel>) {}

	async run(id: CategoryIdDTO): Promise<boolean> {
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
