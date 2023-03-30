import { ClientError } from "../ClientError"

describe("ClientError", () => {
    it("should throw error when directly use it", () => {
        expect(() => new ClientError("")).toThrowError("Cannot instantiate abstract class")
    })
})