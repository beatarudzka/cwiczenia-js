const addPossibilityButton = document.querySelector('.addPossibilityButton')
const resetButton = document.querySelector('.resetButton')
const showAdviseButton = document.querySelector('.showAdviseButton')
const showAllPossibilitiesButton = document.querySelector('.showAllPossibilitiesButton')
const div = document.querySelector('div')

let possibilities = ['wyjdź na spacer z psem', 'wykonaj codzienny trening']


const addPossibility = (event) => {
  event.preventDefault()
  const input = document.querySelector('input')
  const newPossibility = input.value
  if (possibilities.length) {
    possibilities.push(newPossibility)
    div.textContent = `Dodana nowa możliwość: ${newPossibility}`
    input.value = ''
  }
}
const reset = (event) => {
  event.preventDefault()
  possibilities = []
  div.textContent = "Zresetowano wszystkie możliwości"
}
const showAdvise = (event) => {
  event.preventDefault()
  if (possibilities.length) {
    const index = Math.floor(Math.random() * possibilities.length)
    div.textContent = possibilities[index]
  }
}
const showAllPossibilities = (event) => {
  event.preventDefault()
  div.textContent = possibilities
}
addPossibilityButton.addEventListener('click', addPossibility)
resetButton.addEventListener('click', reset)
showAdviseButton.addEventListener('click', showAdvise)
showAllPossibilitiesButton.addEventListener('click', showAllPossibilities)