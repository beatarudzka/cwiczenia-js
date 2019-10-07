class Country {
  constructor(name) {
    this.name = name
    this.showName = () => console.log(this.name)
  }
  showCountryName() {
    console.log(`Nazwa kraju to ${this.name}.`)
  }
}

const Poland = new Country('Polska')

Poland.showCountryName()
Poland.showName()