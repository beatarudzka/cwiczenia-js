const button = document.querySelector('button')
const names = ["Gaja", "Dobrawa", "Jagienka", "Antosia", "Hanna", "Ola", "Kalina"]
const div = document.querySelector('.showName')

const indexOfName = Math.floor(Math.random() * names.length)

const nameGenerator = () => {
  div.textContent = (names[indexOfName])
}

button.addEventListener('click', nameGenerator)