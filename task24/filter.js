const shoppingItems = require('./shoppingItems')

const foodItems = shoppingItems.filter(({ category }) => category === 'food'
)

console.log(foodItems)

