// //One approach to initialize an array
let block2 = new Array('About us', 'Delivery', 'Personal area', 'Registration')

// Standard and the most simple approach to create an array - better to use
let block = ['About us', 'Delivery', 'Personal area', 'Registration']
// Properties and methods of arrays
console.log('Length: ' + block.length) // print lenght
console.log(block) // print the content of the array
console.log(block[1]) // print the value with index 1 - Delivery
console.log(block[10]) // prints undefined, because we do not have a value with index 10
console.log(block.includes('Personal area')) // method "includes" returns boolean value, true if array has specified value, false if not
console.log(block.includes('Personal area', 2)) // returns boolean value, true if specified value is present starting from specified index and further down in the array, false if not
console.log(block.indexOf('Personal area')) //returns the index of specified value

//  methods push() and pop() are working with last elements of an array
//push()
console.log(block.push('Login', 'Cart')) //adds values to the end of the array and returns new length, prints new length and the content of the array
console.log(block) //prints the array with new values
//pop()
console.log(block.pop()) //delete last element from the array and returns it's value
console.log(block) //prints the array with new values

//  methods shift() and unshift() are working with first elements of an array. Takes more time beacause each element should be shifted to the higher/lower index after deletion/adition of a new element.
// shift() - delets st element from an array and returns it's value.
// unshift() - adds  or more elements to an array and returns new length of an array
// to avoid the timeout the tricj is to reverse the order of elements and delete them from the endm then reverse it back.

//reverse() - changes the order of elements in an array/ st element becomes last and vice versa.
console.log(block.reverse())

//slice() - returns a cut of specified elements. Does not affect the original array.
console.log(block.slice(2)) // returns cut of the elements starting from specified index.
console.log(block.slice(1, 4)) // returns cut of the elements starting from specified index and ending at specified index.

//Splice() - changes the content of an array, by deleting or adding elements from/to an array.

//  Deep work with arrays
let blockDeep = [
  ['About us', 'Consent', 'Job'],
  ['Delivery', 'Schedule', 'Prices'],
  ['Personal area', 'Registration', 'Password Recovery'],
]
console.log(blockDeep[1][2]) // prints specified element inside of specified array element - Prices
blockDeep[1][2] = 'Price list' // modifies the spesified element
console.log(blockDeep)
