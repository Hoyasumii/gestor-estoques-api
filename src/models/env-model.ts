import { z } from "zod";

export const EnvModel = z.object({
	PORT: z.string(),
	NODE_ENV: z.enum(["development", "production", "testing"]),
	POSTGRES_DATABASE: z.string(),
	POSTGRES_USERNAME: z.string(),
	POSTGRES_PASSWORD: z.string(),
});

export type EnvModel = z.infer<typeof EnvModel>;
