//OOP - object oriented programming. Main goal: to improve readability and simplify maintanance of a code
// abstraction
// inheritance
// incapsulation
// polymorphism

// classes

// class Car {
//   constructor(color, brand, model) {
//     this.csrColor = color
//     this.carBrand = brand
//     this.carModel = model
//   }
// }

// let cars
// let myNewCar = new Car('red', 'Volvo', 'XC90') //create class object
// console.log(myNewCar) // prints: Car { csrColor: 'red', carBrand: 'Volvo', carModel: 'XC90' }

// let myNextCar = new Car('white', 'Volvo', 'XC60') //create class object
// console.log(myNextCar) // prints: Car { csrColor: 'white', carBrand: 'Volvo', carModel: 'XC60' }

// *****************************************

// // same class, but objects are located inside of same array
// class Car {
//   constructor(color, brand, model) {
//     this.csrColor = color
//     this.carBrand = brand
//     this.carModel = model
//   }
// }

// let cars = [
//   new Car('red', 'Volvo', 'XC90'), //create class object
//   new Car('white', 'Volvo', 'XC60'), //create class object
// ]

// console.log(cars) /* prints:[
//   Car { csrColor: 'red', carBrand: 'Volvo', carModel: 'XC90' },
//   Car { csrColor: 'white', carBrand: 'Volvo', carModel: 'XC60' }
// ]*/

// **********************************************

// another approach to create class
let User = class {
  sayHello() {
    console.log('Hello!')
  }
}
new User().sayHello() //prints: Hello!

// **********************************************

function createClass(greetingsText) {
  return class {
    sayGreetings() {
      console.log(greetingsText)
    }
  }
}
let Person = createClass('Hi! How are you?')
new Person().sayGreetings()

// **********************************************

class StudentsPoints {
  constructor() {
    this.pointsArray = []
  }
  addPoints(value) {
    this.pointsArray.push(value)
  }
  calculatePointSum() {
    let sum = 0
    for (let eachValue of this.pointsArray) {
      sum += eachValue
    }
    return sum
  }
}
let igor = new StudentsPoints()
igor.addPoints(35)
igor.addPoints(15)
igor.addPoints(30)
console.log(igor.calculatePointSum()) //returns 80

// **********************************************
// getters-setters
class Male {
  #gender
  constructor() {
    this.#gender = 'male'
  }
  getGender() {
    return this.#gender
  }
}
let newPerson = new Male()
console.log(newPerson.getGender()) //male

// **********************************************

class Pet {
  constructor(name, city) {
    this.name = name
    this.city = city
  }
  set city(newCity) {
    this._city = newCity
  }
  get city() {
    return this._city
  }
}
const bobik = new Pet('Bobik', 'Prague')
console.log(bobik.city)
bobik.city = 'Madrid'
console.log(bobik.city)

// **********************************************
// Inheritance
class Students {
  constructor(studentName, startYear) {
    this.studentName = studentName
    this.startYear = startYear
  }
  greetings() {
    console.log(`Hi, nice to see you here ${this.studentName}`)
  }
}
class ManualStudents extends Students {
  constructor(studentName, gender, startYear) {
    super(studentName, startYear)
    this.gender = gender
  }
  greetings() {
    console.log('It is Manual Course')
    super.greetings()
  }
}

class Students_January extends ManualStudents {}

let student = new ManualStudents('Petr Petrov', 'male', 2024)
console.log(student.greetings()) /* ManualStudents {
  studentName: 'Petr Petrov',
  startYear: 2024,
  gender: 'male'
} */
let anotherStudent = new Students('Maria', 2021)
console.log(anotherStudent)
console.log(new Students_January('Ivan Ivanov', 'male', 2023))
