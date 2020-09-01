const prices = [11.23, 10,43, 55.9, 38]

const sortedPrices = prices.sort((a, b) => {
  if (a > b){
    return 1
  } else if (a === b){
    return 0
  } else {
    return -1
  }
})

/* const sortedPrices = prices.sort((a, b) => {
  if (a > b){
    return -1
  } else if (a === b){
    return 0
  } else {
    return 1
  }
}) */

//sortedPrices.reverse()

console.log(sortedPrices)