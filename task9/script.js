square = document.querySelector('div')

let divX
let divY
let drawActive = false

square.style.left = `${divX}px`
square.style.top = `${divY}px`

square.addEventListener("mousedown", (event) => {
  square.style.backgroundColor = "grey"
  drawActive = !drawActive

  let insertDivX = event.offsetX
  let insertDivY = event.offsetY
})

square.addEventListener("mouseup", (event) => {
  square.style.backgroundColor = "black"
  drawActive = false
})

square.addEventListener("mousemove", (event) => {
  if (drawActive) {
    const x = event.clientX
    const y = event.clientY
    square.style.left = `${x - insertDivX}px`
    square.style.top = `${y - insertDivY}px`
  }

})