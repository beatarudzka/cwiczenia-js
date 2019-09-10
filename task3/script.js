const square = document.createElement('div')
let size = 10
square.style.height = size + "px"
square.style.width = size + "px"
document.body.appendChild(square)


window.addEventListener("scroll", function () {
  size++
  square.style.width = size + "px"
  square.style.height = size + "px"
})