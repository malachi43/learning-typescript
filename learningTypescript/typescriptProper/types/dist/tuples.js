// //array of tuples.
// let arrayOfArray: [string, number][] = [
//   ["uko", 12],
//   ["malachi", 24],
//   ["testing", 4],
// ];
export {};
// //using type unions with tuples.
// let tupleUnion: ([string, number] | boolean)[] = [
//   ...arrayOfArray,
//   false,
//   false,
//   true,
//   true,
// ];
// // tupleUnion.forEach((item: [string, number] | boolean) => {
// //   if (item instanceof Array) {
// //     let [a, b] = item;
// //     console.log(`String: ${a}`);
// //     console.log(`Number: ${b}`);
// //   } else if (typeof item === "boolean") {
// //     console.log(`Boolean: ${item}`);
// //   }
// // });
// let hat: [string, number, number?, number?] = ["hat", 100, 0, 34];
// let boot: [string, number, number?, number?] = ["boot", 245, 267];
// [hat, boot].forEach((tuple: [string, number, number?, number?]) => {
//   const [first, second, optional1, optional2] = tuple;
//   console.log(
//     `first: ${first}\nsecond: ${second}\noptional1: ${optional1}\noptional2: ${optional2}`
//   );
// });
// let test: [string, number, ...number[]] = ["ada", 1, 2, 3, 4, 56, 45];
// test.forEach((item: string | number) => {
//   console.log(`ITEM IN THE TUPLE: `, item);
// });
