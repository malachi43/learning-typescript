export class Person {
  public name: string;
  public city: string;
  constructor(name: string, city: string) {
    this.name = name;
    this.city = city;
  }
}

export class Product {
  public name: string;
  public price: string;
  constructor(name: string, price: string) {
    this.name = name;
    this.price = price;
  }
}

export class Employee {
  public name: string;
  public role: string;
  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }
}

export class City {
  public population: number;
  public name: string;
  constructor(name: string, population: number) {
    this.name = name;
    this.population = population;
  }
}
