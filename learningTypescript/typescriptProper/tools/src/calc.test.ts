import { sum } from "./calc";
test("check result value", () => {
  let result = sum(30, 30, 30);
  expect(result).toBe(90)
});
