// let hat = {
//     name: "UKO CHIBUIKE MALACHI",
//     age: 26,
//     strongFoot: "right",
//     bestFriend: 'MICHAEL'
// }

// let { name: firstname, ...newObj } = hat
// console.log(`original object:`, hat)
// console.log(firstname)
// console.log(newObj)

let hat = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,
    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },
    get price() {
        return this._price;
    },
    writeDetails(){
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    }
};

hat.writeDetails.call(hat);
hat.price = 120;
hat.writeDetails.call(hat);
