const square = document.createElement('div')
let size = 10
square.style.height = size + "px"
square.style.width = size + "px"
document.body.appendChild(square)

grow = true


window.addEventListener("scroll", function () {
  if (size >= window.innerHeight / 2) {
    grow = false
  }
  else if (size <= 0) {
    grow = true
  }

  if (grow == true) {
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