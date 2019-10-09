const dog = {
  name: "rocky",
  showName() {
    console.log("imię psa to " + this.name)
  }
}

dog.showName()

const dogName = dog.showName.bind(dog)