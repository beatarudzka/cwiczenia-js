function squareDigits(num) {
  const squareDigit = num.toString().split('')
  for (let i = 0; i < squareDigit.length; i++) {
    squareDigit[i] = Math.pow(squareDigit[i], 2)
  }
  return parseInt(squareDigit.join(''))
}