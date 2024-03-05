// //Note: accessing enums like this Products.Hat or Products.Umberlla returns an index 0 and 1 respectively. Accessing an enum like this Products[0] or Products[1] returns the string "Hat" and "Umbrella" respectively. So the values of the enum alternates depending on the mode of access.
// const enum Products {
//   Hat = "Hat",
//   Glove = "Glove",
//   Umbrella = "Umbrella",
// }
export {};
// let product: Products = Products.Hat;
// let products: [Products, number][] = [
//   [Products.Hat, 12],
//   [Products.Glove, 13],
//   [Products.Umbrella, 17],
// ];
// // products.forEach((item: [Products, number]) => {
// //   console.log(`Product: `, item[0]);
// //   console.log(`Number: `, item[1]);
// //   console.log();
// // });
// console.log(Products.Umbrella);
// const enum Role {
//   admin = "admin",
//   user = "user",
//   manager = "manager",
// }
// type Person = {
//   id: string;
//   name: string;
//   city: string;
//   isAuthenticated?(role: Role): boolean;
// };
// type Product = {
//   id: number;
//   name: string;
//   price: number;
// };
// let items: (Product | Person)[] = [
//   { id: Math.floor(Math.random() * 10), name: "socks", price: 700 },
//   { id: Math.floor(Math.random() * 10), name: "boots", price: 200 },
//   { id: Math.floor(Math.random() * 10), name: "gloves", price: 350 },
//   {
//     id: "item1",
//     name: "Michael",
//     city: "Nigeria",
//     isAuthenticated: (role) => role === Role.admin,
//   },
//   {
//     id: "item2",
//     name: "Ada",
//     city: "Abuja",
//     // isAuthenticated: (role) => role === Role.admin,
//   },
//   {
//     id: "item3",
//     name: "Malachi",
//     city: "Nassarawa",
//     // isAuthenticated: (role) => role === Role.admin,
//   },
// ];
// function isPerson(testObj: any): testObj is Person {
//   return testObj.city !== undefined;
// }
// items.forEach((item) => {
//   if (isPerson(item)) {
//     console.log(
//       `Person --> id : ${item.id}  :  name : ${item.name} :  city : ${
//         item.city
//       } isAuthenticated: ${
//         item.isAuthenticated ? item.isAuthenticated(Role.admin) : false
//       }`
//     );
//   } else {
//     console.log(
//       `Product --> id : ${item.id}  :  name : ${item.name} :  price : ${item.price}`
//     );
//   }
// });
