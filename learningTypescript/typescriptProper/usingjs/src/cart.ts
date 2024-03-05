import { SportProduct } from "./product.js";

class CartItem {
  constructor(public product: SportProduct, public quantity: number) {}

  get totalPrice(): number {
    return this.product.price * this.quantity;
  }
}

export class Cart {
  private _items = new Map<number, CartItem>();
  constructor(public customerName: string) {}

  addProdcut(product: SportProduct, quantity: number): number {
    if (this._items.has(product.id)) {
      const prod = this._items.get(product.id);
      prod.quantity += quantity;
      return prod.quantity;
    } else {
      this._items.set(product.id, new CartItem(product, quantity));
      return quantity;
    }
  }

  get totalPrice(): number {
    return [...this._items.values()].reduce(
      (acc, curr) => acc + curr.totalPrice,
      0
    );
  }
  get itemCount(): number {
    return [...this._items.values()].reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
  }
}
