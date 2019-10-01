const addPossibilityButton = document.querySelector('.addPossibilityButton')
const resetButton = document.querySelector('.resetButton')
const showAdviseButton = document.querySelector('.showAdviseButton')
const showAllPossibilitiesButton = document.querySelector('.showAllPossibilitiesButton')
const div = document.querySelector('div')

let possibilities = ['wyjdź na spacer z psem', 'wykonaj codzienny trening']

const addPossibility = (event) => {
  event.preventDefault()
  const input = document.querySelector('input')
  const possibility = input.value
  possibilities.push(possibility)
  console.log(possibilities)
}

addPossibilityButton.addEventListener('click', addPossibility)
