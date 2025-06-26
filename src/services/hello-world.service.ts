import type { Service } from "g/types";

export class HelloWorldService
	implements Service<never, undefined, "Hello World">
{
	async run(): Promise<"Hello World"> {
		return "Hello World";
	}
}
