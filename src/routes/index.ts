import { HelloWorldModule } from "@/modules";
import { Module } from "@nestjs/common";

@Module({
	imports: [HelloWorldModule],
})
export class RoutesModule {}
