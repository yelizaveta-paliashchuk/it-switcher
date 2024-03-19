const square = require('./square')

// // unit tests using jest
// describe('Square equasion testing', () => {
//   it('Discremenant is more than 0', () => {
//     result = [4, -1]
//     expect(square(1, -3, -4)).toEqual(result)
//   })
//   it('Discremenant is equal to 0', () => {
//     expect(square(9, 6, 1)).toEqual(-27)
//   })
//   it('Discremenant is less than 0', () => {
//     expect(square(9, 6, 2)).toEqual('no squares')
//   })
// })

// //  Parametrized unit tests
// describe('Square equasion testing', () => {
//   it.each([
//     [1, -3, -4, [4, -1]],
//     [9, 6, 1, -27],
//     [9, 6, 2, 'no squares'],
//   ])('Values passed %p returned squares %p', (a, b, c, result) => {
//     expect(square(a, b, c)).toEqual(result)
//   })
// })

// Parametrized unit tests literall syntax
describe('Square equasion testing literall syntax', () => {
  it.each`
    a    | b     | c     | result
    ${1} | ${-3} | ${-4} | ${[4, -1]}
    ${9} | ${6}  | ${1}  | ${-27}
    ${9} | ${6}  | ${2}  | ${'no squares'}
  `(`Passing values $a, $b, $c, results $result`, ({ a, b, c, result }) => {
    expect(square(a, b, c)).toEqual(result)
  })
})
