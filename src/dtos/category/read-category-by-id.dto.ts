import { z } from "zod";

export const CategoryIdDTO = z.string().uuid();

export type CategoryIdDTO = z.infer<typeof CategoryIdDTO>;
