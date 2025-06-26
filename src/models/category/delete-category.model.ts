import { z } from "zod";

export const DeleteCategoryModel = z.string().uuid();

export type DeleteCategoryModel = z.infer<typeof DeleteCategoryModel>;
