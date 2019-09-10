const addButton = document.createElement('button')
addButton.textContent = "Start"
document.body.appendChild(addButton)

const ul = document.createElement('ul')
document.body.appendChild(ul)

let number = 0
let fontSize = 10

const liMaker = function () {

  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.textContent = number + 1
    li.style.fontSize = fontSize + "px"
    ul.appendChild(li)
    number++
    fontSize++
  }
}

addButton.addEventListener("click", liMaker)
