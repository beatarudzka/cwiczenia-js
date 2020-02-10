const shoppingItems = require('./shoppingItems')

const findCacao = shoppingItems.find(({ name }) => name.toLowerCase() === 'cacao')

console.log(findCacao)