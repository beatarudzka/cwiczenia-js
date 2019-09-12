square = document.querySelector('div')

let divX = 150
let divY = 50

square.style.left = `${divX}px`
square.style.top = `${divY}px`

square.addEventListener("mousedown", (event) => {
  square.style.backgroundColor = "grey"

})

square.addEventListener("mouseup", (event) => {
  square.style.backgroundColor = "black"
})

square.addEventListener("mousemove", (event) => {
  const x = event.clientX
  const y = event.clientY
  console.log(x)
  console.log(y)

})