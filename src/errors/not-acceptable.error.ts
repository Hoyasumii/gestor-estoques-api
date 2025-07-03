import { ApplicationError } from "./application.error";

export class NotAcceptableError extends ApplicationError {
	constructor() {
		super("Not Acceptable Error Error", undefined, 406);
	}
}
