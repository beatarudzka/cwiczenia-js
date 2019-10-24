let array = []
let number = 0
function FizzBuzz() {
  array.push(number)
  number++
  console.log(array)
  if (number % 15 === 0) {
    array.push("Fizzbuzz")
  } else if (number % 5 === 0) {
    array.push("Fizz")
  } else if (number % 3 === 0) {
    array.push("Buzz")
  }
}

FizzBuzz()