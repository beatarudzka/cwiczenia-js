window.setTimeout(function () {
  console.log('minęło 5 sekund')
}, 5000)

let timer = 0

setInterval(() => console.log(++timer),
  1000)