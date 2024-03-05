import { sum } from "./calc.js";
const arr = [1, 2, 3, 4, 5];
const printMessage = (message: string): void => {
  console.log(`Message: ${message}`);
};

printMessage("Hello, Typescript");
printMessage(`It's sunny today.`);

debugger; //eslint-disable-line no-debugger

console.log(`sum of the numbers in the arr: ${arr} is: `, sum(...arr));
