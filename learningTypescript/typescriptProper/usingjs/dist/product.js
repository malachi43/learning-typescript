export class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
export var SPORT;
(function (SPORT) {
    SPORT[SPORT["Running"] = 0] = "Running";
    SPORT[SPORT["Soccer"] = 1] = "Soccer";
    SPORT[SPORT["WaterSports"] = 2] = "WaterSports";
    SPORT[SPORT["Other"] = 3] = "Other";
})(SPORT || (SPORT = {}));
export class SportProduct extends Product {
    id;
    name;
    price;
    _sports;
    constructor(id, name, price, ...sportsArray) {
        super(id, name, price);
        this.id = id;
        this.name = name;
        this.price = price;
        this._sports = sportsArray;
    }
    usedForSport(s) {
        return this._sports.includes(s);
    }
    get sports() {
        return this._sports;
    }
}
const sport = new SportProduct(12, "soccer", 343, SPORT.Running, SPORT.Running, SPORT.WaterSports);
