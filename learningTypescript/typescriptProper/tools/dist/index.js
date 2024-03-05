"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_js_1 = require("./calc.js");
const arr = [1, 2, 3, 4, 5];
const printMessage = (message) => {
    console.log(`Message: ${message}`);
};
printMessage("Hello, Typescript");
printMessage(`It's sunny today.`);
debugger; //eslint-disable-line no-debugger
console.log(`sum of the numbers in the arr: ${arr} is: `, (0, calc_js_1.sum)(...arr));
//# sourceMappingURL=index.js.map