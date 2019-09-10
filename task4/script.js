const line = document.createElement('div')
let size = 100
let grow = true

line.style.height = size + "px"
line.style.backgroundColor = "green"
line.style.margin = "0"
line.style.padding = "0"
line.style.width = "100%"
line.style.position = "fixed"
line.style.left = "0%"
line.style.top = "0%"

document.body.appendChild(line)

document.body.style.height = "100000px"

const changeHeight = function () {
  console.log(size)
  console.log(innerHeight)
  console.log(grow)
  if (size >= window.innerHeight / 2) {
    grow = !grow
  }
  else if (size <= 0) {
    grow = !grow
  }

  if (grow) {
    size += 5
    line.style.height = size + "px"
    line.style.backgroundColor = "green"
  }
  else {
    size -= 5
    line.style.height = size + "px"
    line.style.backgroundColor = "red"
  }
}

window.addEventListener("scroll", changeHeight)