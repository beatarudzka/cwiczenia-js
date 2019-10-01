const names = []

const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

const addName = (event) => {
  event.preventDefault()
  if (input.value.length) {
    const name = input.value
    names.push(name)
    div.textContent += name + ','
    input.value = ''
  }
}
button.addEventListener('click', addName)