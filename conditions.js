let buttonStatus = 'disabled'
//if else condition
// if (buttonStatus == 'enabled') {
//   console.log('Execute clickBtn()')
// } else {
//   console.log('Execute fillForm()')
// }
// console.log('Continue...')

// if condition
// if (buttonStatus == 'enabled') {
//   console.log('Execute clickBtn()')
// }

// console.log('Continue...')

// if else  condition
// if (buttonStatus == 'enabled') {
//   console.log('Execute clickBtn()')
// } else if (buttonStatus == 'disabled') {
//   console.log('Execute fillForm()')
// } else {
//   console.log('Button has another status')
// }
// console.log('Continue...')

// switch
switch (buttonStatus) {
  case 'enabled':
    console.log('Execute clickBtn()')
    break
  case 'disabled':
    console.log('Execute fillForm()')
    break
  default:
    console.log('Button has another status')
}
console.log('Continue...')
