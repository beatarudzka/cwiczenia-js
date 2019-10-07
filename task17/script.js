const userNames = ["bogdan", "czarek", "felek", "andrzej"]


const namesWithK = userNames.filter(user => {
  return user.indexOf('k') > -1
})
console.log(namesWithK)