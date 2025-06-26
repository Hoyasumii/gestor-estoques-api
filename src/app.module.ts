import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RoutesModule } from "./routes";

@Module({
	imports: [ConfigModule.forRoot(), RoutesModule],
})
export class AppModule {}
