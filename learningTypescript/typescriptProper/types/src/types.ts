// function calculateTax(amount: number): number;
// function calculateTax(amount: null): null;
// function calculateTax(amount: number | null): number | null {
//   if (amount !== null) {
//     return amount * 1.2;
//   }
//   return null;
// }

// function writeValue(label: string, value: number): void {
//   console.log(`${label} : ${value}`);
// }

// //"asserts" keyword is used to denote an assert function.
// function check(expression: boolean): asserts expression {
//   if (!expression) {
//     throw new Error(`Expression is false`);
//   }
// }

// //"assert" keyword used directly on types.
// function checkNumber(val: any): asserts val is number {
//   if (typeof val !== "number") {
//     throw new Error(`Not a number`);
//   }
// }

// function levy(amount: number | null): number {
//   check(typeof amount === "number");
//   return amount * 1.2;
// }

// writeValue("Time since January 1 1970(EPOCH)", calculateTax(400));
