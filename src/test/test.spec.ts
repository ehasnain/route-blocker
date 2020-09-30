import { expect } from "chai";
import { isValidString } from "../utils";

describe("Function: isValidString", () => {
    it("Returns true if a valid string", () => {
        const validString = "abcdef";
        expect(isValidString(validString)).to.be.true;
    });
    it("Returns true if special characters in string", () => {
        const validString = "abc-def";
        expect(isValidString(validString)).to.be.true;
    });
    it("Returns false if space in string", () => {
        const validString = "abcdef ghij";
        expect(isValidString(validString)).to.be.false;
    });
});