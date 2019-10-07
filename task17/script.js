const userNames = ["bogdan", "czarek", "felek", "andrzej"]


const namesWith6Letters = userNames.filter(user => {
  return user.length === 6
})
console.log(namesWith6Letters)