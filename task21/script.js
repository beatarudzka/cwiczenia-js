const fibonacci = {
  getSequenceNumber: function (n) {

    if (n === 0 || n === 1) {
      return this.cache[n]
    }
    if (this.cache[n]) {
      return this.cache[n]
    }
    else {
      this.cache[n] = this.getSequenceNumber(n - 2) + this.getSequenceNumber(n - 1)
    }

    return this.cache[n]
  },

  cache: {
    0: 0,
    1: 1
  }
}

console.log(fibonacci.getSequenceNumber(7))


console.log(fibonacci.cache)


console.log(Object.values(fibonacci.cache))