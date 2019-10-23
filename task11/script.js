const input = document.querySelector('.password')
const passwords = ['JEden', 'dWa']
const div = document.querySelector('div')
const messages = ['11111', '22222']

passwords.forEach((password, index) => {
  passwords[index] = password.toLowerCase()
})

const showMessages = (event) => {
  const text = (event.target.value).toLowerCase()

  passwords.forEach((password, index) => {
    if (text === password) {
      div.textContent = messages[index]
    } else {
      div.textContent = ''
    }
  })
}

input.addEventListener('input', showMessages)