let userBalance = 500
let parcelPrice = 100
let smsCode = 'A001DFX0'
let cellNumber = 4
let accessCode = 'A001DFX0'
const postomat = [null, null, null, '1432HGF', null]

if (smsCode === accessCode) {
  userBalance -= 100
  console.log(
    `Заберите посылку ${postomat[3]} из ячейки № ${cellNumber}. Ваш счет составляет: ${userBalance} ед.`
  )
}
