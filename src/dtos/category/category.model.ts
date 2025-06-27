import { z } from "zod";

export const CategoryModel = z.object({
	id: z.string().uuid(),
	name: z.string(),
	categoryFrom: z.string().uuid().optional(),
});

export type CategoryModel = z.infer<typeof CategoryModel>;
