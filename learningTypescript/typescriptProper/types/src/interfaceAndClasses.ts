// type Person = {
//   id: string;
//   name: string;
//   city: string;
// };

// type Employee = {
//   id: string;
//   name: string;
//   dept: string;
//   city: string;
//   writeDept: () => void;
// };

// let Employee = function (id: string, name: string, dept: string, city: string) {
//   this.id = id;
//   this.name = name;
//   this.dept = dept;
//   this.city = city;
// };

// let salesEmployee: Employee = {
//   id: "mMala",
//   name: "malachiChibuike",
//   dept: "Technical",
//   city: "Bida",
//   writeDept(): void {
//     console.log(`${this.name} works in ${this.dept} department.`);
//   },
// };

// let data: (Person | Employee)[] = [
//   { id: "mUko", name: "mally", city: "Lagos" },
//   { id: "mIdris", name: "Adriano", city: "Osun" },
//   { id: "mSteven", name: "Stefo", city: "Onitsha" },
//   salesEmployee,
// ];

// data.forEach((person) => {
//   if ("dept" in person) {
//     person.writeDept();
//   } else {
//     console.log(
//       `\nid: ${person.id}\nname: ${person.name}\ncity: ${person.city}`
//     );
//   }
// });

//WORKING WITH CLASSES

// type Person = {
//   id: string;
//   name: string;
//   city: string;
// };

// class Employee {
//   public readonly id: string;
//   public name: string;
//   #dept: string;
//   private city: string;

//   constructor(id: string, name: string, dept: string, city: string) {
//     this.id = id;
//     this.name = name;
//     this.#dept = dept;
//     this.city = city;
//   }

//   writeDept(): void {
//     console.log(`${this.name} works in ${this.#dept} department.`);
//   }

//   get location() {
//     return this.city;
//   }

//   set location(location: string) {
//     this.city = location;
//   }

//   get details() {
//     return `${this.name} : ${this.id}  : ${this.location}`;
//   }

//   accessor currentTime: string= new Date().toString()
// }

// let salesEmployee = new Employee("mMala", "Jeremy Stefan", "Sales", "Bida");
// salesEmployee.writeDept();

// console.log(`employeeId: `, salesEmployee.id);

// //location serve as a "backing field".
// console.log(`location: ${salesEmployee.location}`);

// console.log(`details: ${salesEmployee.details}`);

// console.log(`currentTime: ${salesEmployee.currentTime}`);

// salesEmployee.location = "Amuo Odofin";
// console.log(`location: ${salesEmployee.location}`);

// let data: (Person | Employee)[] = [
//   { id: "mUko", name: "mally", city: "Lagos" },
//   { id: "mIdris", name: "Adriano", city: "Osun" },
//   { id: "mSteven", name: "Stefo", city: "Onitsha" },
//   salesEmployee,
// ];

// data.forEach((person) => {
//   if (person instanceof Employee) {
//     person.writeDept();
//   } else {
//     console.log(
//       `\nid: ${person.id}\nname: ${person.name}\ncity: ${person.city}`
//     );
//   }
// });

// abstract class Person {
//   public id: string;
//   public name: string;
//   public city: string;
//   constructor(id: string, name: string, city: string) {
//     this.id = id;
//     this.name = name;
//     this.city = city;
//   }

//   getDetails(): string {
//     return `${this.name} ${this.getSpecificDetails()}`;
//   }

//   //must be implemented by subclasses.
//   abstract getSpecificDetails(): string;
// }

//an interface
// interface Person {
//   name: string;
//   getDetails(): string;
//   dogName?: string;
//   getDogDetails?(): string;
// }

// //interface extending another interface
// // interface DogOwner extends Person {
// //   dogName: string;
// //   getDogDetails(): string;
// // }

// class Employee implements Person {
//   public readonly id: string;
//   public name: string;
//   public dept: string;
//   public city: string;
//   constructor(id: string, name: string, dept: string, city: string) {
//     this.id = id;
//     this.name = name;
//     this.dept = dept;
//     this.city = city;
//   }

//   getDetails(): string {
//     return `Person: ${this.id} ${this.name} ${this.dept} ${this.city}`;
//   }
// }

// class Customer implements Person {
//   public readonly id: string;
//   public name: string;
//   public dept: string;
//   public city: string;
//   public creditLimit: number;
//   constructor(
//     id: string,
//     name: string,
//     dept: string,
//     city: string,
//     creditLimit: number
//   ) {
//     this.id = id;
//     this.name = name;
//     this.dept = dept;
//     this.city = city;
//     this.creditLimit = creditLimit;
//   }

//   getDetails(): string {
//     return `Person: ${this.id} ${this.name} ${this.dept} ${this.city} has $${
//       this.creditLimit
//     } credit limit available as at: ( ${new Date().toDateString()} )`;
//   }
// }

// const data: Person[] = [
//   new Employee("m23455", "chibuike", "Electrical", "Oko-Afo"),
//   new Customer("m53666", "Mikey", "Technical", "Lagos", 1200),
// ];

// data.forEach((item) => {
//   console.log(item.getDetails());
// });

//working with abstract classes

interface Person {
  name: string;
  getDetails(): string;

  dogName?: string;
  getDogDetails?(): string;
}

abstract class AbstractDogOwner implements Person {
  abstract name: string;
  abstract getDetails(): string;

  abstract dogName?: string;

  getDogDetails(): string {
    return `${this.name} has a ${this.dogName} as a pet.`;
  }
}

class DogOwner extends AbstractDogOwner {
  public name: string;
  public dogName: string;
  constructor(name: string, dogName: string) {
    super();
    this.name = name;
    this.dogName = dogName;
  }

  getDetails(): string {
    return `${this.dogName} was bought on ${new Date().toDateString()}`;
  }
}

const dogOwner = new DogOwner("Malachi", "Bingo");
console.log(dogOwner.getDetails());
console.log(dogOwner.getDogDetails());

interface Product {
  name: string;
  price: string;
}

class Product implements Product {
  public name: string;
  public price: string;

  constructor(name: string, price: string) {
    this.name = name;
    this.price = price;
  }
}

class ProductGroup {
  //index signature - allow properties to be created outside the "constructor" function.
  //key             :  value
  [property: string]: Product;

  constructor(...products: [string, Product][]) {
    products.forEach((product) => {
      let key: string = product[0];
      let value: Product = product[1];
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
  console.log(
    `\nThis object has \nkey: ${key}\nproperty: ${JSON.stringify(
      productGroup[key],
      null,
      2
    )}`
  );
});

//NOTE: you can only access variable(s) you assigned using the index notation
let total = Number(productGroup.item3.price) +  Number(productGroup.item9?.price ?? 0)
console.log(`ProductGroup object: `, productGroup["item3"].price);
console.log(`total:  `, total);
