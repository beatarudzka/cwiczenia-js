class Person {
  constructor(name) {
    this.name = name
  }
  showName() {
    console.log(`Imię osoby to ${this.name}`)
  }
}

class Student extends Person {
  constructor(name = "", degrees = []) {
    super(name)
    this.degrees = degrees
  }
  showDegrees() {
    const completed = this.degrees.filter(degree => degree > 2)
    console.log(`Student ${this.name}, ma stopnie: ${this.degrees} i zaliczył już: ${completed.length} projektów`)
  }
}

const Marysia = new Student('Marysia', [2, 4, 5, 3, 4, 1, 2, 4, 5])

Marysia.showName()
Marysia.showDegrees()