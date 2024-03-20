const findMaxScoreAndCongratulate = require('./bestStudentCalculation.cjs')

// describe('findMaxScoreAndCongratulate function test', () => {
//   it('Two students with max score', () => {
//     expect(findMaxScoreAndCongratulate(firstDataset)).toEqual(
//       'Congratulations Ivan, you have the highest score of 35! Congratulations Stepan, you have the highest score of 35!'
//     )
//   })
//   it('Three students with max score', () => {
//     expect(findMaxScoreAndCongratulate(secondDataset)).toEqual(
//       'Congratulations Denis, you have the highest score of 160!'
//     )
//   })
//   it('No students with max score', () => {
//     expect(findMaxScoreAndCongratulate(thirdDataset)).toEqual('')
//   })
// })

//  Parametrized unit tests
const students = require('./students.json')

describe('findMaxScoreAndCongratulate function test', () => {
  it.each([
    [
      students[0],
      'Congratulations Ivan, you have the highest score of 35! Congratulations Stepan, you have the highest score of 35!',
    ],
    [students[1], 'Congratulations Denis, you have the highest score of 160!'],
    [students[2], ''],
  ])('Values passed %p returned responses %p', (students, result) => {
    expect(findMaxScoreAndCongratulate(students)).toEqual(result)
  })
})
