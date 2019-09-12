const coordinates = document.createElement('h1')

document.body.addEventListener("click", (event) => {
  const x = event.clientX
  const y = event.clientY
  const color = getColor(x, y)
  result = x / y
  document.body.style.backgroundColor = color
  coordinates.textContent = x + ', ' + y
})

const getColor = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "red"
  }
  else if (x % 2 === 1 && y % 2 === 1) {
    return "green"
  }
  else {
    return "blue"
  }
}

document.body.appendChild(coordinates)
