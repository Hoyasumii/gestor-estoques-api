import { z } from "zod";

export const CategoryDTO = z.object({
	id: z.string().uuid(),
	name: z.string(),
	categoryFrom: z.string().uuid().optional(),
});

export type CategoryDTO = z.infer<typeof CategoryDTO>;
