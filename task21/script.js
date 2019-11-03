// function squareDigits(num) {
//   const squareDigit = num.toString().split('')
//   for (let i = 0; i < squareDigit.length; i++) {
//     squareDigit[i] = Math.pow(squareDigit[i], 2)
//   }
//   return parseInt(squareDigit.join(''))
// }

// function squareDigits(num){
//   let array = num.toString().split('').map( function(int) {
//     let i = parseInt(int)
//     return i * i
//   })
//   return parseInt(array.join(""))
// }

function squareDigit(num) {
  let numArr = num.toString().split("").map(function (int) {
    let indexArr = parseInt(int)
    return Math.pow(indexArr, 2)
  })
  return parseInt(numArr.join(""))
}
