let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
]
function calculateExpenses(yearlyExpences) {
  let sum = 0
  for (let expense of yearlyExpences) {
    if (expense > 1000) {
      sum += expense
    }
  }
  return sum
}

function isCalculationCorrect(expencesExamples) {
  expencesExamples.forEach((example, index) => {
    const { yearlyExpences } = example
    const expectedSum = yearlyExpences.reduce(
      (acc, curr) => (curr > 1000 ? acc + curr : acc),
      0
    )
    const calculatedSum = calculateExpenses(yearlyExpences)
    if (calculatedSum === expectedSum) {
      console.log('Calculation is correct')
    } else {
      console.log('Calculation is incorrect.')
    }
  })
}

isCalculationCorrect(expencesExamples)

//Домашнее задание 2.4.2

function printMonthsBelowThreshold(yearlyExpences) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  yearlyExpences.forEach((expense, index) => {
    if (expense <= 1000) {
      const monthName = new Date(2024, index).toLocaleString('en-US', {
        month: 'long',
      })
      console.log(`${monthName}: ${expense}`)
    }
  })
}

expencesExamples.forEach((example) => {
  console.log('Months with expenses <= 1000:')
  printMonthsBelowThreshold(example.yearlyExpences)
})
