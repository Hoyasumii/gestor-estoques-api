import { ApplicationError } from "./application.error";

export class ResourceNotFoundError extends ApplicationError {
	constructor() {
		super("Resource Not Found Error", undefined, 404);
	}
}
