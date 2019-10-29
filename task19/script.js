function findShort(s) {
  let array = s.split(' ')
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].length
    console.log(array)
  }
  return Math.min(...array)
}

function findShort(s) {
  let array = s.split(' ').map(word => word.length)
  return Math.min(...array)
}

