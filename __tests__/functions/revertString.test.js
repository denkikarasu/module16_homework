import { revertString } from "../../functions/revertString.js";

describe("tests revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});