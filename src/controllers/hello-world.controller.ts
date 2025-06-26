import { HelloWorldService } from "@/services";
import { Controller, Get } from "@nestjs/common";

@Controller()
export class HelloWorldController {
	constructor(private readonly service: HelloWorldService) {}

	@Get("hello-world")
	async helloWorld() {
		return await this.service.run();
	}
}
