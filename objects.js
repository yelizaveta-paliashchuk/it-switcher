//JSON - JS object notation
//  ONE WAY OF DECLARING THE OBJECT
let testUser = new Object() // declares the object with the name testUser
testUser.name = 'Lisa' // assign a value "lisa" to the property "name" of the object testUser
testUser.age = 32
testUser.city = 'Prague'
console.log(testUser) // print { name: 'Lisa', age: 32, city: 'Prague' }

//  ANOTHER WAY - BETTER - TO DECLARE AN OBJECT
let testUserLiteral = {
  name: 'Lisa',
  age: 32,
  city: 'Prague',
}
console.log(testUserLiteral) //{ name: 'Lisa', age: 32, city: 'Prague' }

//  ONE WAY OF DECLARING AN ARRAY
let userArray = new Array('Lisa', 32, 'Prague')
console.log(userArray) // returns array of values without properties [ 'Lisa', 32, 'Prague' ]

let userNameFunction = new Function(
  'username',
  'age',
  'city',
  'return username + age + city'
)
console.log(userNameFunction('lisa', 32, 'Prague')) // prints lisa32Prague

//  Properties can be written in the quotes
let testUserSimple = {
  'name-new': 'Lisa',
  age: 32,
  'default-city': 'Prague',
}
console.log(testUserSimple) //{ name: 'Lisa', age: 32, 'default-city': 'Prague' }

// 1 way of adding a property:value pair into the existing object
testUserSimple.car = 'Volvo'
console.log(testUserSimple) //{ 'name-new': 'Lisa', age: 32, 'default-city': 'Prague', car: 'Volvo' }

//another way of adding a property:value pair into the existing object is passing variable value
let newProp = 'newCar'
let value = true
testUserSimple[newProp] = value
console.log(testUserSimple) //{'name-new': 'Lisa', age: 32, 'default-city': 'Prague', car: 'Volvo', newCar: 'BMW'}

// Create some logic using object and it's values
// if condition and  property name passed within a variable
if (testUserSimple.age < 40 && testUserSimple[newProp] == true) {
  console.log('You are allowed to get a credit')
} else {
  console.log('You are not allowed to get a credit')
}

//  it is possible to assign the object with it's values to another variable, which becomes an object with the same content. BUT! IMPORTANT: if we change a value in the copy, the value will be changed in the original object!

let anotherTestUserSimple = testUserSimple
console.log(anotherTestUserSimple) // {'name-new': 'Lisa', age: 32, 'default-city': 'Prague', car: 'Volvo', newCar: true}
anotherTestUserSimple['name-new'] = 'Yelizaveta'
console.log(anotherTestUserSimple) // {'name-new': 'Yelizaveta', age: 32, 'default-city': 'Prague', car: 'Volvo', newCar: true}
console.log(testUserSimple) // ORIGINAL OBJECT IS PERMANENTLY UPDATED WHEN THE COPY IS UPDATED:  {'name-new': 'Yelizaveta', age: 32, 'default-city': 'Prague', car: 'Volvo', newCar: true}

//
let calculation = {
  april: 5000,
  may: 3000,
  june: 4500,
  calculateAverage: function () {
    average = (calculation.april + calculation.may + calculation.june) / 3
    console.log(
      `avarage for ${calculation.april} + ${calculation.may} + ${calculation.june} is ${average}`
    )
  },
}
calculation.calculateAverage()
