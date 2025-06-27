export class Paginator {
	constructor(private contentLength: number) {}

	public getNumberOfPages(limit: number): number {
		return Math.ceil(this.contentLength / limit);
	}
}
