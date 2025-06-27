import { InMemoryRepository } from "@/repositories";

export function makeDIPinMemory<DataType, ServiceType>(
	Service: new (...args: Array<unknown>) => ServiceType,
): { service: ServiceType; repository: InMemoryRepository<DataType> } {
	class Dep extends InMemoryRepository<DataType> {}

	const repository = new Dep();

	return {
		service: new Service(repository),
		repository,
	};
}
