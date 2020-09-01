const prices = [10, 12, 15, 30, 5]


/* let sum = 0

prices.forEach( price => sum += price)

console.log(sum) */



const sum = prices.reduce((preValue, curValue, curIndex, array) => {
  return preValue + curValue
}, 0)

console.log(sum)