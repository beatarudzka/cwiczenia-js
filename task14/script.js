const names = []

const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

const addName = (event) => {
  event.preventDefault()
  const newName = input.value
  if (input.value.length) {
    for (name of names) {
      if (name === newName)
        return
    }
    names.push(newName)
    div.textContent += newName + ','
    input.value = ''
  }
}
button.addEventListener('click', addName)