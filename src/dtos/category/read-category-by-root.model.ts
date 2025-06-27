import { z } from "zod";

export const ReadCategoryByRootModel = z.string().uuid();

export type ReadCategoryByRootModel = z.infer<
	typeof ReadCategoryByRootModel
>;
