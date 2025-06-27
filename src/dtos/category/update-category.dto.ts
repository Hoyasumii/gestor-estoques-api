import { z } from "zod";

export const UpdateCategoryDTO = z.object({
	id: z.string().uuid(),
	name: z.string().optional(),
	categoryFrom: z.string().uuid().optional(),
});

export type UpdateCategoryDTO = z.infer<typeof UpdateCategoryDTO>;
