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
    writeDetails() {
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    }
};

// hat.writeDetails.call(hat);
// hat.price = 120;
// hat.writeDetails.call(hat);

let myProto = {
    announce() {
        console.log(`Announcement: NAME: ${this.name} PRICE: ${this.price}`)
    }
}

class Student {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
        this.count = -1
    }

    getFullname() {
        return `Fullname: ${this.firstname} ${this.lastname}`
    }
    MIterator() {
        let that = this
        return {
            next() {
                if (that.count == 5) {
                    return { value: 'no value', done: true }
                }

                return { value: that.count++, done: false }
            }
        }
    }

    *[Symbol.iterator]() {
        yield this.count
        yield this.firstname
        yield this.lastname
    }


}

let student = new Student("Jeremy", "Tyler")
console.log([...student].forEach(item => {
    console.log(item)
}))
let iterate = student.MIterator()
let inc = iterate.next()

function* generator() {
    yield new Student('Sarah', "Nisha")
    yield new Student('Lara', "Pova")
    yield new Student('Jack', "Hill")
    yield new Student('Mike', "Clifford")
    yield new Student('Steven', "Salah")
}

// let generate = generator()
// let response = generate.next()
// while (!response.done) {
//     console.log(response)
//     response = generate.next()
// }

// [...generator()].forEach(item => {
//     console.log(`Each value in the sequence array: `, item)
// })

function print(...rest) {
    rest.forEach((item, index) => {
        console.log(`Element at index: ${index + 1}`, item)
    })
}

// print(...generator())
// console.log(`iterator value: `, inc)
// while (!inc.done) {
//     console.log(`Iterator value: `, inc)
//     inc = iterate.next()
// }

// console.log(student.getFullname())
// console.log(`Prototype: `, Object.getPrototypeOf(student))
// Object.setPrototypeOf(hat, myProto)

// let res = Object.getPrototypeOf(hat)
// console.log(`Initial proto prototype: `, res)
// while (res) {
//     console.log(`Printing prototypes...`, Object.getPrototypeOf(hat))
//     res = Object.getPrototypeOf(res)
// }

// console.log(Object.getPrototypeOf(hat))
// hat.announce()
// console.log(Object.getOwnPropertyNames(hat))
