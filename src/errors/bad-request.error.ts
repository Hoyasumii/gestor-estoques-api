import { ApplicationError } from "./application.error";

export class BadRequestError extends ApplicationError {
	constructor() {
		super("Bad Request Error", undefined, 400);
	}
}
