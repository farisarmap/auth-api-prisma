import { ClientError } from "./ClientError";

export class NotFoundError extends ClientError {
	constructor(readonly message: string) {
		super(message, 404);
		this.name = "NotFoundError";
	}
}
