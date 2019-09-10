document.body.addEventListener("mousemove", (event) => {
  const title = document.querySelector('h1')
  title.textContent = `${event.clientX}, ${event.clientY}`
})