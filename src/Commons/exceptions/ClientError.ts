export class ClientError extends Error {
	constructor(readonly message: string, readonly statusCode: number = 400) {
		super(message);

        if(this.constructor.name == "ClientError") {
            throw new Error("Cannot instantiate abstract class");
        }
        this.statusCode = statusCode
        this.name = "ClientError"
	}
}
