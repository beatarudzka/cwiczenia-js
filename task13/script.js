const chars = 'ABCDEFGHIJKLMNOPRSTUWVZ1234567890'
const button = document.querySelector('button')
const section = document.querySelector('section')
const codesNumber = 1000
const charsNumber = 10

const codesGenerator = () => {
  for (let i = 0; i < codesNumber; i++) {
    let code = ""
    for (let i = 0; i < charsNumber; i++) {
      let index = Math.floor(Math.random() * 30)
      code += chars[index]
    }

    const div = document.createElement('div')
    div.textContent = code
    document.body.appendChild(div)
  }
}

button.addEventListener('click', codesGenerator)