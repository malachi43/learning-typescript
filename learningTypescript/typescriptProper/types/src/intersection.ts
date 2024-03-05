// type Personnel = {
//   id: string;
//   name: string;
//   city: string;
//   contact: { phone: number };
//   getContact(field: number): number;
// };

// type Employee = {
//   company: string;
//   dept: string;
//   contact: { name: string };
//   getContact(field: string): string;
// };

// type EmployedPersonnel = Personnel & Employee;

// let malachi: EmployedPersonnel = {
//   id: "mally",
//   name: "uko",
//   city: "Lagos",
//   company: "PROVAST",
//   dept: "Technical",
//   contact: { name: "Jeremy", phone: +2347064726898 },
//   getContact(field: number | string): any {
//     return typeof field === "string" ? this.contact.name : +2347064726898;
//   },
// };

// let mally: EmployedPersonnel = {
//   id: "mally",
//   name: "daniel",
//   city: "Calabar",
//   company: "ELALAN & REDLEAF",
//   dept: "Technical",
//   contact: { phone: +2347064726898, name: "Lekan" },
//   getContact(field: number | string): any {
//     return typeof field === "string" ? `${this.contact.name}` : this.contact.phone;
//   },
// };

// let fnsType = mally.getContact;
// let stringParams = mally.getContact('')
// let numberParams = mally.getContact(12345)
// console.log(stringParams)
// console.log(numberParams)

// let testType = ({} as EmployedPersonnel).contact;
// let dataItems: EmployedPersonnel[] = [malachi, mally];

// dataItems.forEach((person: Personnel & Employee, index) => {
//   if (index === 1) {
//     console.log(
//       `at index: ${index} passing name as arguement ${person.getContact(
//         person.name
//       )}`
//     );
//     console.log(
//       `at index: ${index} passing phone number as argument ${person.getContact(
//         person.contact.phone
//       )}`
//     );
//   } else {
//     console.log(person);
//   }
// });

// function isEmployee(testObj: any): testObj is Employee {
//   return testObj.contact.phone !== undefined;
// }
