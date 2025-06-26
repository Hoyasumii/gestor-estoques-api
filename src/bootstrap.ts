import { StandardizeResponse, CatchEverything } from "@/interceptors";
import { AppBuilder } from "./app-builder";
import { HttpAdapterHost } from "@nestjs/core";

export async function bootstrap(appModule: unknown & { name: string }) {
	const app = await AppBuilder.build(appModule);
	const port = process.env.PORT ?? 3000;

	app.enableCors();

	app.useGlobalInterceptors(new StandardizeResponse());

	const httpAdapterHost = app.get(HttpAdapterHost);
	app.useGlobalFilters(new CatchEverything(httpAdapterHost));

	await app.listen(port);
}
