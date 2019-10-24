const listOfNumbers = [9, 8 - 2, 11 - 4, 3]

const sum = listOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
console.log(sum)