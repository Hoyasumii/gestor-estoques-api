import { z } from "zod";

export const UpdateCategoryModel = z.object({
	id: z.string().uuid(),
	name: z.string().optional(),
	categoryFrom: z.string().uuid().optional(),
});

export type UpdateCategoryModel = z.infer<typeof UpdateCategoryModel>;
