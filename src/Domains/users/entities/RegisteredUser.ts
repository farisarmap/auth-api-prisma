export class RegisteredUser {
    constructor(readonly data: { id?: string, username: string, fullname: string }) {
        this.verifyPayload(data)
    }

    private verifyPayload(data: { id?: string, username: string, fullname: string }) {
        if (!data.username || !data.fullname || !data.id) {
            throw new Error("REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY")
        }
    }
}