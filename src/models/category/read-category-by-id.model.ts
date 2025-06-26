import { z } from "zod";

export const CategoryIdModel = z.string().uuid();

export type CategoryIdModel = z.infer<typeof CategoryIdModel>;
