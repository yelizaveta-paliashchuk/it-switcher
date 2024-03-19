//ax2+bx+c=0
function square(a, b, c) {
  let disc = b * b - 4 * a * c
  if (disc < 0) {
    console.log(`Discremenant is less then 0, no squares`)
    return 'no squares'
  } else if (disc == 0) {
    let x = (-b / 2) * a
    console.log(`Discremenant is equal to 0, square is: ${x}`)
    return x
  } else {
    let x1 = ((-b + Math.sqrt(disc)) / 2) * a
    let x2 = ((-b - Math.sqrt(disc)) / 2) * a
    console.log(`Discremenant is more than 0, 2 squares: ${x1}, ${x2}`)
    return [x1, x2]
  }
}
module.exports = square
// square(1, -3, -4) // Discremenant is more than 0, 2 squares: 4, -1
// square(9, 6, 1) // Discremenant is equal to 0, square is: -27
// square(9, 6, 2) // Discremenant is less then 0, no squares
