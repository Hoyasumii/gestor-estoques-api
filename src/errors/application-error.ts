export abstract class ApplicationError extends Error {
	constructor(
		name: string,
		message: string = name,
		public status: number = 500,
	) {
		super(message);

		this.name = name;
	}
}
