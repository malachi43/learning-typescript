// import { Person, Product, City, Employee } from "./dataTypes.js";
export {};
// let people: Person[] = [
//   new Person("Malachi", "Lagos"),
//   new Person("Mikey", "Postmouth"),
// ];
// let products: Product[] = [
//   new Product("Shoe", "700"),
//   new Product("Heels", "250"),
// ];
// let cities = [
//   new City("Lagos", Math.floor(Math.random() * 100_001)),
//   new City("Port Harcourt", Math.floor(Math.random() * 100_001)),
// ];
// let employees = [
//   new Employee("Auguero", "Sales"),
//   new Employee("Sabinus", "Marketing"),
// ];
// type shapeType = { name: string };
// interface Collection<T extends shapeType> {
//   add(...items: T[]): void;
//   get(name: string): T | undefined;
//   count: number;
// }
// interface SearchableList<T extends shapeType> extends Collection<T> {
//   find(name: string): T | undefined;
// }
// interface PeopleCollection<T extends Person | Employee> extends Collection<T> {
//   getNames(): string[];
// }
// interface ProductCollection extends Collection<Product> {
//   sumPrices(): number;
// }
// abstract class ACollection<T extends shapeType> implements Collection<T> {
//   protected items: T[] = [];
//   add(...newItems: T[]): void {
//     this.items.push(...newItems);
//   }
//   abstract get(searchTerm: string): T;
//   get count(): number {
//     return this.items.length;
//   }
// }
// class ArrayCollection<DataType extends shapeType>
//   implements Collection<DataType>
// {
//   private items: DataType[] = [];
//   add(...newItems: DataType[]): void {
//     this.items.push(...newItems);
//   }
//   get(name: string): DataType | undefined {
//     return this.items.find((item) => item.name === name);
//   }
//   get count(): number {
//     return this.items.length;
//   }
//   accessor testVariable = Math.floor(Math.random() * 12 + 1);
// }
// class PersonCollection implements Collection<Person> {
//   private items: Person[] = [];
//   add(...newItems: Person[]): void {
//     this.items.push(...newItems);
//   }
//   get(name: string): Person | undefined {
//     return this.items.find((item) => item.name === name);
//   }
//   get count(): number {
//     return this.items.length;
//   }
// }
// export class TestClass extends ACollection<Person> {
//   get(searchTerm: string): Person {
//     return (
//       this.items.find(
//         (person) => person.name === searchTerm ?? person.city === searchTerm
//       ) ?? ({} as Person)
//     );
//   }
// }
// export const testClass: Collection<Person> = new TestClass();
// testClass.add(new Person("Ada Nwaneri", "Ikotun"),...people);
// console.log(`testClass size: `, testClass.count);
// console.log(`from array people: `, people[1]?.city);
// const personCollection: Collection<Person> = new PersonCollection();
// personCollection.add(...people, ...people);
// console.log(`returned person: `, personCollection.get("Mikey"));
// console.log(personCollection);
// console.log(`No of people in colllection: `, personCollection.count);
// export const arrayCollection: Collection<Employee> =
//   new ArrayCollection<Employee>();
// arrayCollection.add(...employees, ...employees, ...employees);
// console.log(arrayCollection);
// console.log(`Collection size: `, arrayCollection.count);
// let array: (Person | Product)[] = [...people, ...products];
// array.forEach((item) => console.log(`Item: ${item.name}`));
// class DataCollection<T extends { name: string }> {
//   protected items: T[] = [];
//   constructor(initilaItems: T[]) {
//     this.items.push(...initilaItems);
//   }
//   collate<U>(
//     targetData: U[],
//     targetProp: string,
//     itemProp: string
//   ): (T & U)[] | undefined {
//     let result: (T & U)[] = [];
//     this.items.forEach((item: T) => {
//       let match = targetData.find((d: U) => d[targetProp] === item[itemProp]);
//       if (match !== undefined) {
//         result.push({ ...match, ...item });
//       }
//     });
//     return result;
//   }
//   add(person: T): void {
//     this.items.push(person);
//   }
//   getNames(): string[] {
//     return this.items.map((item) => item.name);
//   }
//   getItem(index: number): T {
//     // if (index < this.items.length) return this.items[index] as T;
//     return this.items[index] as T;
//   }
//   showCollection(): T[] {
//     return this.items;
//   }
// }
// class DataCollection<T> {
//   protected items: T[] = [];
//   constructor(initialItems: T[]) {
//     this.items.push(...initialItems);
//   }
//   filter<V extends T>(predicate: (target: T) => target is V): V[] {
//     return this.items.filter((item) => predicate(item)) as V[];
//   }
//   static reverse<ArrayType>(items: ArrayType[]): ArrayType[] {
//     return items.reverse();
//   }
// }
//return type is "type predicate" this helps to narrow a "union"(Product | Person) type. This is known as a type guard.
// function isProduct(testObj: any) {
//   return testObj instanceof Product;
// }
// function isProduct(testObj: any): testObj is Product {
//   return testObj instanceof Product;
// }
// //extending a generic class. NOTE: The type parameter of the subclass must be compatible with the type parameter of the superclass. Therefore the need for the type parameter(T) extending "{name: string}" shape in the subclass.
// class SearchableCollection<
//   T extends { name: string }
// > extends DataCollection<T> {
//   constructor(initialItems: T[]) {
//     super(initialItems);
//   }
//   find(name: string): T | undefined {
//     return this.items.find((item) => item.name === name);
//   }
// }
//streamlining the superclass type parameter with a subset of the supported types(type that defines a name property) type parameter. Classes are literally types.
// class SearchableCollection<
//   T extends Employee | Person
// > extends DataCollection<T> {
//   constructor(initialItems: T[]) {
//     super(initialItems);
//   }
//   find(searchTerm: string): T[] {
//     searchTerm = searchTerm.toLowerCase();
//     return this.items.filter((item) => {
//       if (item instanceof Person) {
//         return (
//           item.name.toLowerCase() === searchTerm ||
//           item.city.toLowerCase() === searchTerm
//         );
//       } else if (item instanceof Employee) {
//         return (
//           item.name.toLowerCase() === searchTerm ||
//           item.role.toLowerCase() === searchTerm
//         );
//       }
//     });
//   }
// }
// export const collection = new DataCollection<Product | Employee | Person>(
//   products
// );
// export let res = collection.filter<Product>(isProduct);
// console.log(`not reversed: `, res);
// res.forEach((item, index) => {
//   console.log(
//     `\n${index + 1}. Product:\nname: ${item.name}\nprice: $${item.price}`
//   );
// });
// export let reverseProduct = DataCollection.reverse<City>(cities);
// console.log(`\nreversed array: `, reverseProduct);
// export let collatedData = collection.collate<City>(cities, "name", "city");
// collatedData.forEach((item) => {
//   console.log(
//     `\nname:${item.name}\npopulation:${item.population}\ncity:${item.city}`
//   );
// });
// console.log(collatedData)
// const productCollection = new DataCollection<Product, City>(products);
// const cityCollection = new DataCollection<City, Person>(cities);
// console.log(`Names:\t${collection.getNames().join(", ")}`);
// console.log(`Names:\t${productCollection.getNames().join(", ")}`);
// console.log(`Names:\t${cityCollection.getNames().join(", ")}`);
// let item = collection.getItem(1);
// let item1 = productCollection.getItem(1);
// let item3 = cityCollection.getItem(0);
// console.log(item);
// console.log(item1);
// console.log(item3);
// if (item instanceof Person) {
//   console.log(
//     `firstname:\t${collection.getItem(0).name}\ncity:\t${
//       collection.getItem(0).city
//     }`
//   );
// }
// console.log(collection.showCollection());
// console.log(productCollection.showCollection());
// console.log(cityCollection.showCollection());
//Narrowing a generic type.
