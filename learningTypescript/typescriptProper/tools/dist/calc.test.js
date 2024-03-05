"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
test("check result value", () => {
    let result = (0, calc_1.sum)(30, 30, 30);
    expect(result).toBe(90);
});
//# sourceMappingURL=calc.test.js.map