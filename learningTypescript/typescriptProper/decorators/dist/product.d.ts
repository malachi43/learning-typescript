export declare class Product {
    #private;
    name: string;
    price: number;
    constructor(name: string, price: number);
    getDetails(): string;
    getPrice(): number;
    get productName(): string;
    set productName(product: string);
    accessor prop: number;
}
