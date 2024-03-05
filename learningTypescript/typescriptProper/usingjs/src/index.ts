import { Cart } from "./cart.js";
import { SportProduct } from "./product.js";
import { SPORT } from "./product.js";
import { sizeFormatter, costFormatter } from "./formatter.js";

export const doe = new SportProduct(3, "doe", 75, SPORT.Running, SPORT.Soccer);
export const bimbo = new SportProduct(
  7,
  "bimbo",
  179,
  SPORT.Other,
  SPORT.WaterSports,
  SPORT.Running
);

export const userCart = new Cart("Malachi");
userCart.addProdcut(doe, 3);
userCart.addProdcut(bimbo, 12);

// console.log(userCart);
sizeFormatter("Cart", userCart.itemCount);
costFormatter("Cart", userCart.totalPrice);
// writeMessage("Testing 123...");
