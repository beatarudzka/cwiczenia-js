const shoppingItems = require('./shoppingItems')


const totalPrice = shoppingItems.reduce((acc, item) => {
  return acc + item.price
}, 0)
console.log(totalPrice)


const priceOfFood = shoppingItems.filter(item => {
  return item.category === 'food'
}).reduce((acc, food) => acc + food.price, 0)

console.log(priceOfFood)