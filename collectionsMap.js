//  Map - simillar object to an array. Holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

let mapSample = new Map() // initialize empty map object
//  set() - adds elements to the map
mapSample.set('first', 'firstValue') // adds string key and string value into the map
console.log(mapSample)
mapSample.set(['second'], ['secondValue']) // adds  array key and  array value into the map
console.log(mapSample)
mapSample.set(Date.now(), 'thirdValue') // adds  array key and  array value into the map
console.log(mapSample.get('first')) //returns the value of specified key - firstValue
console.log(mapSample.size) //returns the length/size of the map
console.log(mapSample.delete('first')) // removes the element by specified key
console.log(mapSample)
console.log(mapSample.delete('first')) // returns a boolean indicating whether an element with specified key exists in this map or not
// .keys() - returns a new map itarator object that contains the keys of each element of this map
// .values() - returns a new map itarator object that contains the values of each element of this map

// get() - gets element from the map
