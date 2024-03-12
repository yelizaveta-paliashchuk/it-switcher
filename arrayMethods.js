// //forEach()
// const values = [1, 3, 4, 5, 6, 8]

// values.forEach(function (value, index, values) {
//   console.log(`element ${value}, index: ${index}, length: ${values.length}`)
// })

// // filter()
// const passwords = ['xxx123', 'yyy123', 'zzz123', 'fhtr']

// const filteredArray = passwords.filter(function (password) {
//   return password.length > 5
// })
// console.log(filteredArray)

// const scores = [20, 45, 55, 100]
// const filteredScores = scores.filter((score) => {
//   return score > 45
// })

// console.log(filteredScores)

// // sort()

//ascending order - numbers
// const values = [2, 5, 12, 3, 8, 23, 45]
// const sortedArray = values.sort((a, b) => {
//   return a - b
// })
// console.log(sortedArray) // prints: [2,  3,  5, 8, 12, 23, 45]

//descending order -numbers
// const values = [2, 5, 12, 3, 8, 23, 45]
// const sortedArray = values.sort((a, b) => {
//   return b - a
// })
// console.log(sortedArray) // prints:[ 45, 23, 12, 8, 5,  3,  2 ]

// //sorting strings by their length from the longest to the shortest
// const passwords = ['xxx123', 'yyy1', 'zzz12', 'fht']
// const sortedArray = passwords.sort((a, b) => {
//   return b.length - a.length
// })
// console.log(sortedArray) // prints: [ 'xxx123', 'zzz12', 'yyy1', 'fht' ]

// //sorting strings by their length from the shortest to the longest
// const passwords = ['xxx123', 'yyy1', 'zzz12', 'fht']
// const sortedArray = passwords.sort((a, b) => {
//   return a.length - b.length
// })
// console.log(sortedArray) // prints: [ 'fht', 'yyy1', 'zzz12', 'xxx123' ]

// //  map() - transform array to another datatype. Example below: to an array of objects. Does not change the original array
// const values = [2, 5, 12, 3, 8, 23, 45]
// const playersScores = values.map((value, index) => {
//   return {
//     id: index,
//     score: value,
//   }
// })
// console.log(playersScores) /* prints:
// [
//   { id: 0, score: 2 },
//   { id: 1, score: 5 },
//   { id: 2, score: 12 },
//   { id: 3, score: 3 },
//   { id: 4, score: 8 },
//   { id: 5, score: 23 },
//   { id: 6, score: 45 }
// ]
// */

// // compare the properties of 2 arrays, returns boolean value
// const values = [1, 2, 3, 4]
// const values2 = [5, 6, 7, 8, 9]
// console.log(values.length === values2.length) // prints: false

// //concat - merging 2 or more arrays into one
// const newArray = values.concat(values2)
// console.log(newArray) /* prints:
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ] */
// console.log(newArray.length) // 9

// //spread() - ... - similar to concat, can merge arrays

// console.log([...values, ...values2]) /* prints:
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ] */

// // pass value to some function or method. Example below: return minimal/max value from the array
// console.log(Math.min(...newArray)) // prints: 1
// console.log(Math.max(...newArray)) // prints: 9

// console.log(...newArray) //prints:  1 2 3 4 5 6 7 8 9

// // *********************************************************************************************

// // 1. push()  Добавление идентификатора нового тест кейса в список, returns new array length
// let testCaseIds = [101, 102, 103]
// console.log(
//   testCaseIds.push(104) // [101, 102, 103, 104]
// )
// //  pop() - удаление последнего добавленного, returns the deleted element
// let lastAdded = testCaseIds.pop()
// console.log(lastAdded) // 104
// console.log(testCaseIds) // [ 101, 102, 103 ]

// *********

// //  shift() & unshift()- Запуск первого теста в очереди и добавление теста на более высокий приоритет

// let testQueue = ['lowPriorityTest1', 'lowPriorityTest2']
// let nextTest = testQueue.shift()
// console.log(testQueue) //[ 'lowPriorityTest2' ]
// testQueue.unshift('highPriorityTest')
// console.log(testQueue) //[ 'highPriorityTest', 'lowPriorityTest2' ]
