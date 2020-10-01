import { random } from "../../functions/random.js";

describe("test random function", () => {
    it("get random number between min and max", () => {
      const min = 0, max = 1;
      const result = random(min, max);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(1);
    });
    it("if min = max, get min", () => {
      const min = 1, max = 1;
      expect(random(min, max)).toBe(1);
    });
    it("if min > max, return invalid result", () => {
      const min = 5, max = 1;
      expect(random(min, max)).toBe("Данные неверны");
    });
});