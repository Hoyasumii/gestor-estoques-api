import { ConsoleLogger } from "@nestjs/common";

export function logger() {
	return new ConsoleLogger({
		prefix: "🔥 HOY",
		timestamp: false,
		compact: true,
		logLevels: ["log", "warn", "error"],
	});
}
