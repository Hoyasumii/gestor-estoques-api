import type { CategoryDTO, CategoryIdDTO } from "@/dtos/category";

export class CategoryModel {
	public readonly id: CategoryIdDTO;
	public name: string;
	public categoryFrom?: string;

	private constructor(data: CategoryDTO) {
		this.id = data.id;
		this.name = data.name;
		this.categoryFrom = data.categoryFrom;
	}

	static build(data: CategoryDTO): CategoryModel {
		return new CategoryModel(data);
	}
}
