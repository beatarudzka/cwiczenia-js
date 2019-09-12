square = document.querySelector('div')

let divX
let divY
// square.style.left = `${divX}px`
// square.style.top = `${divY}px`
let drawActive = false

square.addEventListener("mousedown", (event) => {
  square.style.backgroundColor = "grey"
  divX = event.offsetX
  divY = event.offsetY
  drawActive = !drawActive
})

square.addEventListener("mouseup", () => {
  square.style.backgroundColor = "black"
  drawActive = !drawActive
})

square.addEventListener("mousemove", (event) => {
  if (drawActive) {
    const x = event.clientX
    const y = event.clientY
    let insertDivX = x - divX
    let insertDivY = y - divY
    square.style.left = `${insertDivX}px`
    square.style.top = `${insertDivY}px`
  }
})