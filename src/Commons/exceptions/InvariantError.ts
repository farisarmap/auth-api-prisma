import { ClientError } from "./ClientError";

export class InvariantError extends ClientError {
	constructor(readonly message: string) {
		super(message);
		this.name = "InvariantError";
	}
}
