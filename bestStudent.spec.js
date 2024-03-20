const findMaxScoreAndCongratulate = require('./bestStudentCalculation.cjs')
const firstDataset = [
  { name: 'Ivan', score: 35, date: '2022-10-11' },
  { name: 'Maria', score: 5, date: '2022-10-10' },
  { name: 'Olga', score: 0, date: '' },
  { name: 'Stepan', score: 35, date: '2022-10-12' },
  { name: 'Oleg', score: 9, date: '2022-10-01' },
  { name: 'Zanna', score: 15, date: '2022-10-11' },
]
const secondDataset = [
  { name: 'Margo', score: 0, date: '2022-10-11' },
  { name: 'Natalia', score: 7, date: '2022-10-10' },
  { name: 'Marina', score: 21, date: '2022-10-01' },
  { name: 'Dmitry', score: 15, date: '2022-10-12' },
  { name: 'Denis', score: 160, date: '2022-10-02' },
  { name: 'Vadimyr', score: 1, date: '2022-10-11' },
]
const thirdDataset = [
  { name: 'Irina', score: 0, date: '2022-10-11' },
  { name: 'Vasily', score: 0, date: '2022-10-10' },
  { name: 'David', score: 0, date: '2022-10-11' },
  { name: 'Kristina', score: 0, date: '2022-10-12' },
  { name: 'Varvara', score: 0, date: '2022-10-01' },
  { name: 'Tanya', score: 0, date: '2022-10-11' },
]

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
describe('findMaxScoreAndCongratulate function test', () => {
  it.each([
    [
      firstDataset,
      'Congratulations Ivan, you have the highest score of 35! Congratulations Stepan, you have the highest score of 35!',
    ],
    [
      secondDataset,
      'Congratulations Denis, you have the highest score of 160!',
    ],
    [thirdDataset, ''],
  ])('Values passed %p returned responses %p', (students, result) => {
    expect(findMaxScoreAndCongratulate(students)).toEqual(result)
  })
})
