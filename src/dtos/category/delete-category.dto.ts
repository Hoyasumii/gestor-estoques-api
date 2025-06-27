import { z } from "zod";

export const DeleteCategoryDTO = z.string().uuid();

export type DeleteCategoryDTO = z.infer<typeof DeleteCategoryDTO>;
