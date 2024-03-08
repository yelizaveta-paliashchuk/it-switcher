// Callback functions to avoid asynchronization

const sampleData = require('./generatedTestData.json')
// console.log(sampleData) //returns the whole JSON file
// console.log(sampleData[0]) //returns the object with index 0 from JSON file
// console.log(sampleData[0].name) //returns the value of specified property in JSON file

//send a newslatter to all emails from each user of a test data. Create a function to call an array with emails from JSON.
function first(array, callbackFunction) {
  let emailsArray = []
  array.forEach((userData) => {
    emailsArray.push(userData.email)
  })
  setTimeout(() => {
    console.log(emailsArray)
    callbackFunction()
  }, 2000)
}
function second() {
  console.log('Second Action')
}
first(sampleData, second) //call the function and in arguments specify the variable which contain a JSON with the test data and a another's function name; first prints the array of emails, then second function
