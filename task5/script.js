const addLiButton = document.querySelector('button')
const ul = document.querySelector('ul')
const liElements = [...document.querySelectorAll('li')]
let size = 10

const showAndMakeBiggerLiElements = function () {
  liElements.forEach(function (li) {
    li.classList.add("bigger")
    li.style.fontSize = size + 'px'
  })
  size++
}
addLiButton.addEventListener("click", showAndMakeBiggerLiElements)