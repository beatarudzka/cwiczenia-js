const chars = 'ABCDEFGHIJKLMNOPRSTUWVZ1234567890'
const button = document.querySelector('button')
const section = document.querySelector('section')
const codesNumber = 1000
const charsNumber = 10

const codesGenerator = () => {
  for (let i = 0; i < codesNumber; i++) {
    const div = document.createElement('div')
    div.textContent = chars
    document.body.appendChild(div)
  }
}

button.addEventListener('click', codesGenerator)