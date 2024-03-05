import { Employee, City, Person, Product } from "./dataTypes.js";
let products = [new Product("Running Shoes", "100"), new Product("Hat", "25")];
class Collection {
    //index signature
    //   private items: Set<T>;
    items;
    propertyName;
    constructor(initialItems, propertyName) {
        // this.items = new Set(initialItems);
        this.items = new Map();
        this.propertyName = propertyName;
        this.add(...initialItems);
    }
    add(...newItems) {
        // newItems.forEach((item) => {
        //   this.items.add(item);
        // });
        newItems.forEach((item) => {
            this.items.set(item[this.propertyName], item);
        });
    }
    get count() {
        return this.items.size;
    }
    //T[K]  returns the type of the key reference by the type[propertyName]
    get(name) {
        // return [...this.items.keys()].find((item) => item.name === name);
        return this.items.get(name);
    }
    //created an iterator with a "next" method.
    // values(): Iterator<T> {
    //the result of the map "values" method defines all the property specified by the interface.
    //   return this.items.values();
    // }
    //creates a [Symbol.iterator] property and an iterator as well with a "next" method.
    //   values(): IterableIterator<T> {
    //     //the result of the map "values" method defines all the property specified by the interface.
    //     return this.items.values();
    //   }
    [Symbol.iterator]() {
        return this.items.values();
    }
}
function customIterator() {
    let array = [];
    let count = 0;
    return {
        next() {
            ++count;
            for (let i = 1; i <= 1000; i++) {
                array.push(`Number ${i}`);
            }
            if (count <= 1000) {
                return { value: array[count - 1], done: false };
            }
            else {
                return { value: 0, done: true };
            }
        },
    };
}
// let iterate = customIterator();
// let moveUp = iterate.next();
// while (!moveUp.done) {
//   console.log(moveUp);
//   moveUp = iterate.next();
// }
export let productCollection = new Collection(products, "name");
console.log(`returned product: `, productCollection.get("Running Shoes"));
// console.log(`There are ${productCollection.count} item(s) in the cart`);
// export let hat = productCollection.get("Hat");
// if (hat !== undefined) {
//   console.log(`Product: ${hat.name} , ${hat.price}`);
// }
// export let iterator: Iterator<Product> = productCollection.values();
// export let result: IteratorResult<Product> = iterator.next();
// for (let item of productCollection.values()) {
//   console.log(`for of listed item: `, item);
// }
for (let item of productCollection) {
    console.log(`item traversed through: `, item);
}
export let str = "name";
str = "price";
function getValue(item, keyName) {
    return item[keyName];
}
let p = new Product("Wristwatch", "500");
let e = new Employee("Uko Chibuike Malachi", "Backend Developer");
console.log(getValue(e, "name"));
console.log(getValue(e, "role"));
let testVariable = { name: "Malachi Chibuike Uko", price: "12" };
console.log(testVariable);
export let cty = {
    name: "uko",
    population: Math.floor(Math.random() * 1000000),
};
console.log(cty);
let emp = { name: "uko", role: "actor" };
// emp.role = "driver";
console.log(emp);
let specialHuman = {
    canMove: true,
    eye: "two",
    leg: 4,
};
console.log(specialHuman);
let anotherHuman = {
    canMove: true,
    eye: "two",
    leg: 4,
};
console.log(`anotherHuman: `, anotherHuman);
let mally = "malachi uko chibuike";
let num = 12;
let country = new City("Zambia", Math.floor(Math.random() * 12000000));
let pd = new Product("polish", "$10");
let psn = new Person("Uko", "Owerri");
let arr = [country, pd, psn];
console.log(...arr);
let numberArr = [20, 30, 40, 50, 60];
let res = numberArr.reduce((acc, curr, index, array) => {
    acc.total += acc.total + curr;
    let num = (array[index] * 2);
    acc.arr.push(num);
    return acc;
}, {
    total: 0,
    arr: [],
    author: "Mally",
});
console.log(`final result: `, res);
class List {
    items;
    constructor(initialItems) {
        this.items = initialItems;
    }
    total(propName, format) {
        let total = this.items.reduce((acc, curr) => {
            let sum = acc + Number(curr[propName]);
            return sum;
        }, 0);
        return format ? `$${total.toFixed(2)}` : total;
    }
}
const listItems = new List([
    new Product("SHOES", "250"),
    new Product("Boots", "1540"),
]);
console.log(`accessing the total method from the List class: `, listItems.total("price", false));
function filterArray(arr, predicate) {
    return arr.filter((item) => predicate(item));
}
function isProduct(testObj) {
    return testObj instanceof Product;
}
let coll = [
    new Product("SHOES", "250"),
    new Product("Boots", "1540"),
    new Employee("Uko Chibuike Malachi", "Backend Developer"),
    new Employee("Uko", "Frontend Developer"),
];
export let ans = filterArray(coll, isProduct);
console.log(`filtered answer: `, ans);
//Note: A class is seen as a type. While an object or an instance of that class is seen as an object of that type.
class Obj {
    firstname;
    age;
    lastname;
    lifeSpan;
    constructor(firstname, age, lastname, lifeSpan) {
        this.firstname = firstname;
        this.age = age;
        this.lastname = lastname;
        this.lifeSpan = lifeSpan;
    }
}
//NOTE: the "keyof" keyword, returns a union of the property name(s) defined by a javascript object.
function getContent(data, prop) {
    if (Array.isArray(data)) {
        return data[0][prop];
    }
    return data[prop];
}
let prods = [
    new Product("soccer boots", "234"),
    new Product("shoe lace", "345"),
];
let x = new Product("soccer boots", "234");
// console.log(prods[1])
console.log(`value of getContent function: `, getContent(prods, "name"));
//This function should take in a generic type T and also a callback function that takeS a generic type T and returnS a type of any.
function processArray(data, func) {
    return data.map((item) => {
        //The func(item) and its return value is used to defined the "Result<T>" type.
        return func(item);
    });
}
console.log(`\nthe returned array: `, processArray(prods, function (item) {
    return `${item.name}`;
}));
function makeObject(constructor, ...args) {
    return new constructor(...args);
}
let objOne = makeObject(Product, "bangle", "2345");
let objTwo = makeObject(Employee, "intern", "productManager");
console.log(objOne, objTwo);
//This function accepts a class and variable number of arguments and returns the instance of the class.
function createObject(constructor, ...args) {
    return new constructor(...args);
}
