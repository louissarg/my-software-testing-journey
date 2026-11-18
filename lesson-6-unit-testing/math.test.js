const { add, subtract } = require("./math");
test("add two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});
test("subtract two numbers correctly", () => {
  expect(subtract(10, 4)).toBe(6);
  expect(subtract(5, 7)).toBe(-2);
});
