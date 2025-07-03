export interface CommandObject<RunMethodArgs, RunMethodReturnType> {
	run(data: RunMethodArgs): Promise<RunMethodReturnType>;
}
