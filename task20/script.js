function getCount(str) {
  const strArray = str.split('').filter(string => "AEIOUaeiou".includes(string)).length
  return strArray
}

function getCount(str) {
  var vowelsCount = 0
  str.split("").forEach(function (x) {
    if (x == "a" | x == "e" | x == "i" | x == "o" | x == "u") {
      vowelsCount += 1
    }
  })
  return vowelsCount
}