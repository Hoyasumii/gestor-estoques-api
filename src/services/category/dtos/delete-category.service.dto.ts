import { z } from "zod";

export const DeleteCategoryServiceDTO = z.object({
	id: z.string().uuid(),
	recursive: z.boolean().default(false),
});

export type DeleteCategoryServiceDTO = z.infer<typeof DeleteCategoryServiceDTO>;
