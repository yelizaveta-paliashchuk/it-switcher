function increment(x) {
  return ++x
}

function decrement(x) {
  return --x
}

// calling the functions
var initialValue = 5
var incrementedValue = increment(initialValue)
var decrementedValue = decrement(initialValue)

// printing the results of the functions
console.log(`Value after incrementation: ${incrementedValue}`)
console.log(`Value after decrementation: ${decrementedValue}`)
