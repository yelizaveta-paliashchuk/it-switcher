const calculateBonus = (a, b) => {
  let bonus
  const sum = a + b
  debugger // values are passed to the function, sum is calculated
  sum > 50 ? (bonus = 50) : (bonus = sum)
  debugger // bonus is calculated
  return bonus
}
console.log(calculateBonus(30, 10)) //sum<50
console.log(calculateBonus(25, 40)) // sum>50
