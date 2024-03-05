import { Employee, City, Person, Product } from "./dataTypes.js";
let products = [new Product("Running Shoes", "100"), new Product("Hat", "25")];

type shapeType = { name: string };

class Collection<T, K extends keyof T> implements Iterable<T> {
  //index signature
  //   private items: Set<T>;
  private items: Map<T[K], T>;
  private propertyName: K;
  constructor(initialItems: T[], propertyName: K) {
    // this.items = new Set(initialItems);
    this.items = new Map<T[K], T>();
    this.propertyName = propertyName;
    this.add(...initialItems);
  }

  add(...newItems: T[]): void {
    // newItems.forEach((item) => {
    //   this.items.add(item);
    // });

    newItems.forEach((item) => {
      this.items.set(item[this.propertyName], item);
    });
  }

  get count(): number {
    return this.items.size;
  }

  //T[K]  returns the type of the key reference by the type[propertyName]
  get(name: T[K]): T | undefined {
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

  [Symbol.iterator](): Iterator<T> {
    return this.items.values();
  }
}

function customIterator() {
  let array: string[] = [];
  let count = 0;
  return {
    next() {
      ++count;
      for (let i = 1; i <= 1_000; i++) {
        array.push(`Number ${i}`);
      }
      if (count <= 1_000) {
        return { value: array[count - 1], done: false };
      } else {
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
export let productCollection: Collection<Product, "name"> = new Collection<
  Product,
  "name"
>(products, "name");

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

export let str: keyof Product = "name";
str = "price";

function getValue<T, K extends keyof T>(item: T, keyName: K): T[K] {
  return item[keyName];
}

let p = new Product("Wristwatch", "500");
let e = new Employee("Uko Chibuike Malachi", "Backend Developer");
console.log(getValue<Employee, "name" | "role">(e, "name"));
console.log(getValue(e, "role"));

//This is known as "index access operator" and it is used to get the type for one or more properties. "Product" is a type.
export type priceType = Product["price"];
//THE "keyof Product" expression returns a union of types: "string" | "string" because name and price properties are of type string. The return types are known as "lookup types".
export type allTypes = Product[keyof Product];

//A type mapping is an expression that selects property names to be included in the mapped type and the type for each of them.
export type mappedProduct = {
  [P in keyof Product]: Product[P];
};

export type mapped<T> = {
  [P in keyof T]: T[P];
};

// export let cty: mapped<City> = {
//   name: "uko",
//   population: Math.floor(Math.random() * 1000_000),
// };
// console.log(cty);
//changing the mapped type property name and type.
type allowNumber = {
  [P in keyof Product as `${P}Prop`]: Product[P] | number;
};
let testVariable: mappedProduct = { name: "Malachi Chibuike Uko", price: "12" };
console.log(testVariable);

type makeOptional<T> = {
  [P in keyof T]?: T[P];
};

type makeRequired<T> = {
  [P in keyof T]-?: T[P];
};

type makeReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type makeReadWrite<T> = {
  -readonly [P in keyof T]: T[P];
};

export let cty: makeRequired<City> = {
  name: "uko",
  population: Math.floor(Math.random() * 1000_000),
};

console.log(cty);

type optionalType = Partial<Employee>;
type requiredType = Required<optionalType>;
type readonlyType = Readonly<requiredType>;
type makeReadWriteType = makeReadWrite<readonlyType>;

let emp: readonlyType = { name: "uko", role: "actor" };
// emp.role = "driver";
console.log(emp);

type Human = {
  eye: string;
  nose: string;
  leg: number;
  isAdult: boolean;
  canMove: boolean;
  canFly: boolean;
};

//The keyof opertor in Typescript is used to obtain the union of keys(property names). Examples prop2 | prop 5 | prop6
type selectProps<T, K extends keyof T> = {
  [P in K]: T[P];
};

type newProp = selectProps<Human, "eye" | "leg" | "canMove">;

let specialHuman: newProp = {
  canMove: true,
  eye: "two",
  leg: 4,
};

console.log(specialHuman);
type transformedType<T, K extends keyof T> = Readonly<Partial<Pick<T, K>>>;

let anotherHuman: transformedType<Human, "eye" | "leg" | "canMove"> = {
  canMove: true,
  eye: "two",
  leg: 4,
};

console.log(`anotherHuman: `, anotherHuman);

type customType<K extends keyof any, T> = {
  [P in K]: T;
};

type anotherT = customType<"name" | "role", string>;

//conditional mappings

type resultType<T extends boolean> = T extends true ? string : number;

let mally: resultType<true> = "malachi uko chibuike";
let num: resultType<false> = 12;

// let mismatch: resultType<false> = "string value"

type references = "Nigeria" | "Malachi" | "football";

//nested conditional types
type nestedRef<T extends references> = T extends "Nigeria"
  ? City
  : T extends "Malachi"
  ? Person
  : Product;

let country: nestedRef<"Nigeria"> = new City(
  "Zambia",
  Math.floor(Math.random() * 12_000_000)
);
let pd: nestedRef<"football"> = new Product("polish", "$10");
let psn: nestedRef<"Malachi"> = new Person("Uko", "Owerri");

let arr = [country, pd, psn];

console.log(...arr);

let numberArr: number[] = [20, 30, 40, 50, 60];

let res = numberArr.reduce(
  (acc, curr, index, array) => {
    acc.total += acc.total + curr;
    let num = ((array[index] as number) * 2) as number;
    acc.arr.push(num);
    return acc;
  },
  {
    total: 0,
    arr: [] as number[],
    author: "Mally",
  }
);

console.log(`final result: `, res);

class List<T> {
  private items: T[];
  constructor(initialItems: T[]) {
    this.items = initialItems;
  }

  total<P extends keyof T, U extends boolean>(
    propName: P,
    format: U
  ): resultType<U> {
    let total = this.items.reduce((acc, curr) => {
      let sum = acc + Number(curr[propName]);
      return sum;
    }, 0);

    return format ? `$${total.toFixed(2)}` : (total as any);
  }
}

const listItems = new List<Product>([
  new Product("SHOES", "250"),
  new Product("Boots", "1540"),
]);

console.log(
  `accessing the total method from the List class: `,
  listItems.total("price", false)
);
type Filter<T, U> = T extends U ? never : T;

function filterArray<T, U>(
  arr: T[],
  predicate: (item: T | U) => item is U
): Filter<T, U>[] {
  return arr.filter((item) => predicate(item)) as any;
}

function isProduct(testObj: any): testObj is Product {
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
  constructor(
    public firstname: string,
    public age: number,
    public lastname: string,
    public lifeSpan: number
  ) {}
}

type unionTypesNames<T, U> = {
  [P in keyof T]: T[P] extends U ? P : never;
};
//NOTE: All type declaration always return an object with some properties. Having the form {property: value}
//A class is seen as a type.
type mutate<T> = {
  [P in keyof T]: T[keyof T];
};
type newType = unionTypesNames<Obj, number>;
type getPropName<T, U> = unionTypesNames<T, U>[keyof T];

type another = getPropName<Obj, number>;

type testType<T> = {
  [P in keyof T]: T[P];
};

//using the "infer" key to infer types.
type targetKeys<T> = T extends (infer U)[] ? keyof U : keyof T;

//NOTE: the "keyof" keyword, returns a union of the property name(s) defined by a javascript object.
function getContent<T, P extends targetKeys<T>>(data: T, prop: P): T[P] {
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
//The type(Result) should accept a type T that should be a callback  function that takes in varialbel number  of argument and returns a type(we dont know the type at compile time so we infer the type with R).
type Result<T> = T extends (...args: any) => infer R ? R : never;
type callback<T> = (arg: T) => any;

//This function should take in a generic type T and also a callback function that takeS a generic type T and returnS a type of any.
function processArray<T, Func extends callback<T>>(
  data: T[],
  func: Func
): Result<T>[] {
  return data.map((item) => {
    //The func(item) and its return value is used to defined the "Result<T>" type.
    return func(item);
  });
}

console.log(
  `\nthe returned array: `,
  processArray(prods, function (item) {
    return `${item.name}`;
  })
);

function makeObject<T extends new (...args: any) => any>(
  constructor: T,
  ...args: ConstructorParameters<T>
): InstanceType<T> {
  return new constructor(...(args as any));
}

let objOne = makeObject(Product, "bangle", "2345");
let objTwo = makeObject(Employee, "intern", "productManager");

console.log(objOne, objTwo);

//This function accepts a class and variable number of arguments and returns the instance of the class.
function createObject<T extends new (...args: any) => any>(
  constructor: T,
  ...args: ConstructorParameters<T>
): InstanceType<T> {
  return new constructor(...(args as any));
}

//NOTES: "T extends new (...args) => any",The left hand expression means that type T must be a class.i.e that is why a construction function syntax is used.
