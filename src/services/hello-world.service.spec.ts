import { beforeEach, describe, expect, it } from "vitest";
import { HelloWorldService } from "./hello-world.service";

let sut: HelloWorldService;

describe("Testing Hello World Service", () => {
	beforeEach(() => {
		sut = new HelloWorldService();
	});

	it(`should return an "Hello World"`, async () => {
		await expect(sut.run()).resolves.toBe("Hello World");
	});
});
