export declare class Product {
    id: number;
    name: string;
    price: number;
    constructor(id: number, name: string, price: number);
}
export declare enum SPORT {
    Running = 0,
    Soccer = 1,
    WaterSports = 2,
    Other = 3
}
export declare class SportProduct extends Product {
    id: number;
    name: string;
    price: number;
    private _sports;
    constructor(id: number, name: string, price: number, ...sportsArray: SPORT[]);
    usedForSport(s: SPORT): boolean;
    get sports(): SPORT[];
}
