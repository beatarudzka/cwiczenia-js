const title = document.querySelector('h1')

document.body.addEventListener("mousemove", (event) => {
  title.textContent = `${event.clientX}, ${event.clientY}`
})