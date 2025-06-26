import { BadRequestException, type PipeTransform } from "@nestjs/common";
import type { ZodSchema, ZodTypeDef } from "zod";

export class ZodValidator<
	Output = unknown,
	Def extends ZodTypeDef = ZodTypeDef,
	Input = Output,
> implements PipeTransform
{
	constructor(private readonly zodSchema: ZodSchema<Output, Def, Input>) {}

	transform(value: Input) {
		const { success, data } = this.zodSchema.safeParse(value);

		if (success) return data;

		throw new BadRequestException("Validation Failed");
	}
}
