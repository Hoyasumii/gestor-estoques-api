import { HelloWorldController } from "@/controllers";
import { helloWorldFactory } from "@/factories";
import { HelloWorldService } from "@/services";
import { Module } from "@nestjs/common";

@Module({
	controllers: [HelloWorldController],
	providers: [
		{
			provide: HelloWorldService,
			useFactory: helloWorldFactory,
			
		},
	],
})
export class HelloWorldModule {}
