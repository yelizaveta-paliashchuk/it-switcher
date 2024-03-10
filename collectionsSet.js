//  Set - collection of values that allows to store unique values of any datatype or links to objects

let sampleSet = new Set() // initialize a Set
sampleSet.add('firstElement') //adds a value into the set
console.log(sampleSet)
const obj = { a: 1, b: 2 } // define a varianle to store an object
sampleSet.add(obj) //adds the variable containing an object into the set (link to the object)
console.log(sampleSet)
console.log(sampleSet.has(obj)) //returns boolean indicating the presence/absense of the specified element in the Set

// in general methods for the Set collection is quite simillar to the map collection methods
