export class RegisterUser {
    constructor(readonly data: { username: string, password: string, fullname?: string }) {
        // console.log(data.username, data.password, data.fullname)
        this.verifyPayloadUser(data)
    }

    private verifyPayloadUser(data: { username: string, password: string, fullname?: string }) {
        if (!data.username || !data.password || !data.fullname) {
            throw new Error("REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY")
        }

        if (data.username.length > 50) {
            throw new Error("REGISTER_USER.USERNAME_LIMIT_CHAR")
        }

        if (!data.username.match(/^[a-zA-Z1-9_]+$/)) {
            throw new Error('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
        }
    }
}