import { z } from "zod";

export const CreateCategoryModel = z.object({
	name: z.string(),
	categoryFrom: z.string().uuid().optional(),
});

export type CreateCategoryModel = z.infer<typeof CreateCategoryModel>;
