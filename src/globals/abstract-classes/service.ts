export abstract class Service<Repository, Args, ReturnType> {
	constructor(protected repository: Repository) {}

	abstract run(data: Args): Promise<ReturnType>;
}
