import { RegisterUser } from "../RegisterUser"

describe("a RegisterUser Entities", () => {
    it("should throw error when payload did not contain needed property", () => {
        //Arrange
        const payload = {
            username: "abc",
            password: "abc"
        }

        expect(() => new RegisterUser(payload)).toThrowError("REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY")
    })

    // it("should throw error when payload did not meet data type speculation", () => {
    //     const payload = {
    //         username: 123,
    //         fullname: "farisarma",
    //         password: "faris"
    //     }

    //     expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION')
    // })

    it('should throw error when username contains more than 50 character', () => {
        // Arrange
        const payload = {
            username: 'dicodingindonesiadicodingindonesiadicodingindonesiadicoding',
            fullname: 'Dicoding Indonesia',
            password: 'abc',
        };
        // Action and Assert
        expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_LIMIT_CHAR');
    });

    it('should throw error when username contains restricted character', () => {
        // Arrange
        const payload = {
            username: 'dico ding',
            fullname: 'dicoding',
            password: 'abc',
        };
        // Action and Assert
        expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
    });

    it('should create registerUser object correctly', () => {
        // Arrange
        const payload = {
            username: 'dicoding',
            fullname: 'Dicoding Indonesia',
            password: 'abc',
        };
        // Action
        const registerUser = new RegisterUser(payload)
        // Assert
        expect(registerUser.data.username).toEqual(payload.username);
        expect(registerUser.data.fullname).toEqual(payload.fullname);
        expect(registerUser.data.password).toEqual(payload.password);
    });
})