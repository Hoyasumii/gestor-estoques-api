declare namespace NodeJS {
	export interface ProcessEnv {
		PORT: string;
		NODE_ENV: "development" | "production" | "testing";
		POSTGRES_DATABASE: string;
		POSTGRES_USERNAME: string;
		POSTGRES_PASSWORD: string;
	}
}
