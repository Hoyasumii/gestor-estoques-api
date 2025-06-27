import { z } from "zod";

export const CreateCategoryDTO = z.object({
	name: z.string(),
	categoryFrom: z.string().uuid().optional(),
});

export type CreateCategoryDTO = z.infer<typeof CreateCategoryDTO>;
