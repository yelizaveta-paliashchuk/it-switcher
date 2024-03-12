// return Full Name
export function logUserName(surname, firstname) {
  console.log(`${surname} ${firstname}`)
}

// two dependent functions. We can export 1 which uses another function
export function logTextParameter(textData) {
  return calculateLength(textData)
}

function calculateLength(text) {
  return text.length
}
