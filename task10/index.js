const input = document.querySelector('.password')
const div = document.querySelector('.message')

const password = '1234'
const message = 'wyjechałam na zawsze'

input.addEventListener('input', (event) => {
  if (event.target.value === password) {
    div.textContent = message
    event.target.value = ''
  } else {
    div.textContent = ''
  }
})

input.addEventListener('focus', (event) => {
  event.target.classList.add('active')
})

input.addEventListener('blur', (event) => {
  event.target.classList.remove('active')
})