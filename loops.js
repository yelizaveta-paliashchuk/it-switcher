// // while loop - first check for conditions, then execute the code
// function convertTemperature(value) {
//   return (value * 9) / 5 + 32
// }
// // let testArr = [0, 32, -1]
// // // while loop
// // let i = 0
// // while (i < testArr.length) {
// //   console.log(convertTemperature(testArr[i]))
// //   i++
// // }

// //do while loop - execute code before checking the condition
// // let i = 0

// // do {
// //   console.log(convertTemperature(testArr[i]))
// //   i++
// // } while (i < testArr.length)

// // // for of loop - can be used with different data types (object, array, map, set etc.)
// // for (let value of testArr) {
// //   console.log(convertTemperature(value))
// // }

// // for in loop - recommended to use with object datatype
// // let testObject = {
// //   0: '32',
// //   32: '89.6',
// //   '-1': '30.2',
// // }
// // for (let key in testObject) {
// //   console.log(convertTemperature(key) + ' is equal to ' + testObject[key])
// // }

// //  loop in a loop
// // break, continue, label - key words
// continue
// let expenses = [-100, -200, 300, 200, 400, -100]
// let sum = 0
// for (let i = 0; i < expenses.length; i++) {
//   if (expenses[i] < 0) continue
//   sum += expenses[i]
// }
// console.log(sum) //900

// // label - search key word allows to break the loop outside of current loop
const matrix = [
  [1, 2, 3],
  [66, 55, 44],
  [234, 567, 890],
]
// search: for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(`Current element is ${matrix[i][j]}`)
//     if (matrix[i][j] === 55) {
//       console.log(`Element 55 is at [${i},${j}]`)
//       break search
//     }
//   }
// }

//forEach - method - used with array
// matrix.forEach((value) => {
//   console.log(value)
// })
// prints:
/*
[ 1, 2, 3 ]
[ 66, 55, 44 ]
[ 234, 567, 890 ]
*/
matrix.forEach((value, index) => {
  console.log(`${index} ${value}`)
})
// prints:
/*0 1,2,3
1 66,55,44
2 234,567,890*/
