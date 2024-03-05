import { Employee, City, Product } from "./dataTypes.js";
declare class Collection<T, K extends keyof T> implements Iterable<T> {
    private items;
    private propertyName;
    constructor(initialItems: T[], propertyName: K);
    add(...newItems: T[]): void;
    get count(): number;
    get(name: T[K]): T | undefined;
    [Symbol.iterator](): Iterator<T>;
}
export declare let productCollection: Collection<Product, "name">;
export declare let str: keyof Product;
export type priceType = Product["price"];
export type allTypes = Product[keyof Product];
export type mappedProduct = {
    [P in keyof Product]: Product[P];
};
export type mapped<T> = {
    [P in keyof T]: T[P];
};
type makeRequired<T> = {
    [P in keyof T]-?: T[P];
};
export declare let cty: makeRequired<City>;
export declare let ans: Employee[];
export {};
