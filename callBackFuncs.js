//calculate savings
function calculateExpenses(food, restaurant, utility, school) {
  return food + restaurant + utility + school
}
function calculateSavings(expenses, salary) {
  return salary - expenses
}
console.log(calculateSavings(calculateExpenses(8000, 4000, 2000, 20000), 45000)) //11000

// calculate savings using callback function - call the function as a parameter passing to another function
//calculate savings
function calculateExpenses(food, restaurant, utility, school) {
  return food + restaurant + utility + school
}
function calculateSavings(
  expenses = calculateExpenses(8000, 4000, 2000, 20000), //default values
  salary = 45000
) {
  return salary - expenses
}
console.log(calculateSavings()) // calling function without parametres will return 11000 - sum of default values
console.log(calculateSavings(20000, 64000)) // calling function specifying the parameters will override default and calculate values from parameters
console.log(calculateSavings(20000)) // calling function specifying only 1 of 2 parameters will override first parameter and calculate value passed withing function call and default second parameter
