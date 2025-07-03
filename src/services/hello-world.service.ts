import { Service } from "g/abstract-classes";

export class HelloWorldService extends Service<
	undefined,
	never,
	"Hello World"
> {
	async run(): Promise<"Hello World"> {
		return "Hello World";
	}
}
