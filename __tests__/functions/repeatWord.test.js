import { repeatWord } from "../../functions/repeatWord.js";

describe("test repeatWord function", () => {
    it("word repeated required number of times", () => {
      expect(repeatWord('слово', 3)).toBe('слово1, слово2, слово3, ');
      expect(repeatWord('слово', 1)).toBe('слово1, ');
      expect(repeatWord('слово', 0)).toBe('');
      expect(repeatWord('', 3)).toBe('1, 2, 3, ');
    });
});