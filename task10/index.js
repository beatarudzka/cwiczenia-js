const input = document.querySelector('.password')
const div = document.querySelector('.message')

const passwords = ['', 'a', 'b', 'c']
const messages = ['', 'piękna pora roku', 'wyjechałam na zawsze', 'mały ptak']

input.addEventListener('input', (event) => {

  const text = event.target.value
  passwords.forEach((password, index) => {
    console.log(password)
    console.log(text)
    if (password == text) {
      div.textContent = messages[index]
    }
  })
})

input.addEventListener('focus', (event) => {
  event.target.classList.add('active')
})

input.addEventListener('blur', (event) => {
  event.target.classList.remove('active')
})