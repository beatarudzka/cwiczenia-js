const buttonAddLi = document.querySelector("button")
const list = document.querySelector('ul')
let number = 1

const makeLi = function () {
  const li = document.createElement('li')
  li.textContent = number
  list.appendChild(li)
  if (number % 3 === 0) {
    li.classList.add('bigger')
  }
  number = number + 2
}
buttonAddLi.addEventListener('click', makeLi)
