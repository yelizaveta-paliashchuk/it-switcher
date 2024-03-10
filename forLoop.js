// for ([starting value]; [condition]; [step]){
//     //execute action while the condition is true
// }

// let parkingExpences = [5, 3, 5, 7, 85, 3, 2, 2, 35]
// for (let i = 0; i < parkingExpences.length; i++) {
//   console.log('index is: ' + i + ' and value is: ' + parkingExpences[i])
// }

// let parkingExpenses = [5, 3, 5, 7, 85, 3, 2, 2, 35]
// let totalExpenses = 0 //starting point of total exp
// for (let i = 0; i < parkingExpenses.length; i++) {
//   totalExpenses += parkingExpenses[i]
// }
// console.log(totalExpenses) //prints the final value of totalExpenses variable

// let parkingExpenses = [5, 3, 5, 7, 85, 3, 2, 2, 35]

// let target = 7
// let found = false

// for (let i = 0; i < parkingExpenses.length; i++) {
//   if (parkingExpenses[i] === target) {
//     console.log(`The element is found under index ${i}`)
//     found = true
//     break
//   }
// }
// if (!found) {
//   console.log('The element is not found') //Prints: The element is found under index 3
// }

//bubble sorting
let arr = [5, 35, 68454, 158, 5, 8, 3, 3, 65]
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      //values exchange
      let temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
}

console.log(arr)
