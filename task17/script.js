const dog = {
  name: "rocky",
  kids: ["łapciuch", "pimpek"],
  showKidsNames() {
    console.log("dzieci to: " + this.kids)
    const numberOfKids = () => {
      console.log(this.kids.length)
    }
    numberOfKids()
  }
}

dog.showKidsNames()

