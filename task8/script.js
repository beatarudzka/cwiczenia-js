const coordinates = document.createElement('h1')

document.body.addEventListener("click", (event) => {
  const x = event.clientX
  const y = event.clientY

  result = x / y

  coordinates.textContent = x + ', ' + y

  if (x % 2 === 0 && y % 2 === 0) {
    document.body.style.backgroundColor = "red"
  }
  else if (x % 2 === 1 && y % 2 === 1) {
    document.body.style.backgroundColor = "green"
  }
  else {
    document.body.style.backgroundColor = "blue"
  }
})

document.body.appendChild(coordinates)
