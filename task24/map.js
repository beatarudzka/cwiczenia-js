const shoppingItems = require('./shoppingItems')

// {
//   name: 'Cacao',
//   price: 5.6,
//   category: 'food',
//   quantity: 1
// },

const shoppingList = shoppingItems.map(({ name, price, category }) => `${name} | ${price} | ${category}`
)

console.log(shoppingList)