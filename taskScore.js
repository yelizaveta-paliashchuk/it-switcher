let studentName = 'Yelizaveta Paliashchuk'
let nameParts = studentName.split(' ')
let formattedName = nameParts[0].slice(0, 1) + '. ' + nameParts[1]

let introduction = 100
let git = 319
let js = 40

let total = introduction + git + js

let averageScore = total / 3
console.log(
  `${formattedName}'s average score for the first three modules is ${averageScore} points.`
)
