const dog = {
  name: "rocky",
  kids: ["łapciuch", "pimpek"],
  showKidsNames() {
    console.log("dzieci to: " + this.kids)
    const numberOfKids = function () {
      console.log(this.kids.length)
    }.bind(this)
    numberOfKids()
  }
}

dog.showKidsNames()

