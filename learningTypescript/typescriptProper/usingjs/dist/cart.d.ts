import { SportProduct } from "./product.js";
export declare class Cart {
    customerName: string;
    private _items;
    constructor(customerName: string);
    addProdcut(product: SportProduct, quantity: number): number;
    get totalPrice(): number;
    get itemCount(): number;
}
