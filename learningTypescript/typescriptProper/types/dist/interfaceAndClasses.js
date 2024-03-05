// type Person = {
//   id: string;
//   name: string;
//   city: string;
// };
class AbstractDogOwner {
    getDogDetails() {
        return `${this.name} has a ${this.dogName} as a pet.`;
    }
}
class DogOwner extends AbstractDogOwner {
    name;
    dogName;
    constructor(name, dogName) {
        super();
        this.name = name;
        this.dogName = dogName;
    }
    getDetails() {
        return `${this.dogName} was bought on ${new Date().toDateString()}`;
    }
}
const dogOwner = new DogOwner("Malachi", "Bingo");
console.log(dogOwner.getDetails());
console.log(dogOwner.getDogDetails());
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class ProductGroup {
    constructor(...products) {
        products.forEach((product) => {
            let key = product[0];
            let value = product[1];
            this[key] = value;
        });
    }
}
let product = new Product("hoverboard", "500");
let product2 = new Product("skater", "700");
const productGroup = new ProductGroup(["item1", product], ["item2", product2]);
productGroup.item3 = new Product("football", "50");
productGroup["item4"] = new Product("football", "1000");
Object.keys(productGroup).forEach((key) => {
    console.log(`\nThis object has \nkey: ${key}\nproperty: ${JSON.stringify(productGroup[key], null, 2)}`);
});
//NOTE: you can only access variable(s) you assigned using the index notation
let total = Number(productGroup.item3.price) + Number(productGroup.item9?.price ?? 0);
console.log(`ProductGroup object: `, productGroup["item3"].price);
console.log(`total:  `, total);
export {};
