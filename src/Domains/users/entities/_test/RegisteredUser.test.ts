import { RegisteredUser } from "../RegisteredUser"

describe("a RegisteredUser entities", () => {
    it("should throw error when payload did not contain needed property", () => {
        //Arrange
        const payload = {
            username: "dicoding",
            fullname: "Dicoding Indonesia"
        }

        //Action and Assert
        expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY')
    })

    it('should create registeredUser object correctly', () => {
        // Arrange
        const payload = {
            id: 'user-123',
            username: 'dicoding',
            fullname: 'Dicoding Indonesia',
        };

        // Action
        const registeredUser = new RegisteredUser(payload);

        // Assert
        expect(registeredUser.data.id).toEqual(payload.id);
        expect(registeredUser.data.username).toEqual(payload.username);
        expect(registeredUser.data.fullname).toEqual(payload.fullname);
    });
})