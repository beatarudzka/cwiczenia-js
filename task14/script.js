const names = []

const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

const addName = (event) => {
  event.preventDefault()
  const name = input.value
  names.push(name)
  div.textContent += name + ','

}
button.addEventListener('click', addName)