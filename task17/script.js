const customers = [
  { name: "Adam ", age: 45 },
  { name: "Ewa ", age: 42 },
  { name: "Józef ", age: 15 }
]

const isUserAdult = customers.find(customer => customer.age > 18)
console.log(isUserAdult)