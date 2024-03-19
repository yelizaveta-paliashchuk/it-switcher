const calculateBonus = require('./homework')

describe('Bonus Calculation', () => {
  test('Sum is less then 50', () => {
    expect(calculateBonus(30, 10)).toBe(40)
  })

  test('Sum is more then 50', () => {
    expect(calculateBonus(40, 25)).toBe(50)
  })
  test('Sum is 0', () => {
    expect(calculateBonus(0, 0)).toBe(0)
  })
  test('Sum is 50', () => {
    expect(calculateBonus(20, 30)).toBe(50)
  })
})
