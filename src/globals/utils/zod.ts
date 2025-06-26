import { ZodValidator } from "@/pipes";
import type { ZodSchema, ZodTypeDef } from "zod";

export function zod<
	Output = unknown,
	Def extends ZodTypeDef = ZodTypeDef,
	Input = Output,
>(schema: ZodSchema<Output, Def, Input>) {
	return new ZodValidator(schema);
}
