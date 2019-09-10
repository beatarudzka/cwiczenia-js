const square = document.createElement('div')
let size = 10
square.style.height = size + "px"
square.style.width = size + "px"
document.body.appendChild(square)

grow = true


window.addEventListener("scroll", function () {
  if (size >= window.innerHeight / 2) {
    grow = !grow
  }
  else if (size <= 0) {
    grow = !grow
  }

  if (grow) {
    size += 5
    square.style.width = size + "px"
    square.style.height = size + "px"
  }
  else {
    size = size - 5
    square.style.width = size + "px"
    square.style.height = size + "px"
  }
})