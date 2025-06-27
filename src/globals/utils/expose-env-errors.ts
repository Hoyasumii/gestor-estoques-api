import type { EnvModel } from "@/dtos";
import type { ZodError } from "zod";
import { logger } from "./logger";

export function exposeEnvErrors(error: ZodError<EnvModel>) {
	const log = logger();

	error.issues.forEach(({ path, message }) => {
		log.error(`\n> [${path}] - ${message}\n`);
	});

	log.fatal("\n> Invalid Env File");
}
