import { time, label } from "./methodDecorator.js";
import { serialize } from "./classDecorator.js";
import { double } from "./fieldDecorator.js";
import { log } from "./accessorDecorator.js";
import { autoLog } from "./autoAccessor.js";
let count = 1;
@serialize
export class Product {
  // @double
  #num: number = 234;
  constructor(public name: string, public price: number) {
    count++;
  }

  // @time
  getDetails(): string {
    return `Name:${this.name}, Price:$${this.price}`;
  }

  @label({ label: "Product.getDetails" })
  @time
  getPrice(): number {
    return this.price + this.#num;
  }

  // @log
  get productName() {
    return this.name;
  }

  // @log
  set productName(product) {
    this.name = product;
  }

  @autoLog
  accessor prop: number = 41298;
}

const prod = new Product("boots", 234);
