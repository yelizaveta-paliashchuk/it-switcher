//  Задача: студенты получают дополнительные баллы за успешное и самое быстрое завершение практической работы, для этого нам необходимо вычислить данных студентов. Дан объект с набором данных разных студентов, в котором необходимо вычислить студента с максимальным количеством баллов - в консоли вывести поздравления для данного студента.

// Create a function to find maximum score value in the arrays, take the student's name and return congratulations for this Student.
// Create unit tests with 100% coverage of branches and lines

function findMaxScoreAndCongratulate(students) {
  // Create an empty array to store the points
  let points = []
  // Fill the points array with score values from the students array; student is each object here
  for (let student of students) {
    points.push(student.score)
  }
  // Find the maximum score using Math.max and the spread operator
  let maxScore = Math.max(...points)
  let congratulations = []
  // Find the student with the maximum value in scores property
  for (let student of students) {
    if (student.score === maxScore && student.score !== 0) {
      congratulations.push(
        `Congratulations ${student.name}, you have the highest score of ${maxScore}!`
      )
    }
  }
  // Return the concatenated congratulatory messages
  return congratulations.join(' ')
}

// const students = require('./students.json')
// findMaxScoreAndCongratulate(students)

module.exports = findMaxScoreAndCongratulate
