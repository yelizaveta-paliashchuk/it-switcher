const calculateBonus = (a, b) => {
  let bonus
  const sum = a + b
  sum > 50 ? (bonus = 50) : (bonus = sum)
  return bonus
}
// console.log(calculateBonus(30, 10)) //sum<50
// console.log(calculateBonus(25, 40)) // sum>50

module.exports = calculateBonus
