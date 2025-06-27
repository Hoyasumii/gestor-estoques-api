import { z } from "zod";

export const ReadCategoryByRootDTO = z.string().uuid();

export type ReadCategoryByRootDTO = z.infer<
	typeof ReadCategoryByRootDTO
>;
