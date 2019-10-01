const input = document.querySelector('.password')
const div = document.querySelector('.message')

const passwords = ['1234', 'wiosna']
const messages = ['wyjechałam na zawsze', 'piękna pora roku']

input.addEventListener('input', (event) => {

  const text = event.target.value
  passwords.forEach((password, index) => {
    if (password === text)
      div.textContent = messages[index]
  })
})

input.addEventListener('focus', (event) => {
  event.target.classList.add('active')
})

input.addEventListener('blur', (event) => {
  event.target.classList.remove('active')
})