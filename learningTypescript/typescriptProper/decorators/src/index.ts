import { City } from "./city.js";
import { Product } from "./product.js";
import { isSerializable, isStringArray } from "./classDecorator.js";

const product = new Product("tomatoes", 255.0);
const lagos = new City("lagos", 207_000_00);

// console.log(product.getDetails());
// console.log(lagos.getSummary());
// console.log(product.getPrice());
// console.log(lagos.getPrice());
// product.productName = "Amala"

// if (isSerializable(product)) {
//   product.serialize();
// }
// if (isSerializable(lagos)) {
//   lagos.serialize();
// }
// console.log(product.productName);
product.getPrice();
lagos.getSummary()
