const prices = [10, 12, 15, 30, 5]
const tax = .2
const adjustedPrices = []

/* for(const price of prices){
  adjustedPrices.push(price* (1+tax))
}

console.log(adjustedPrices)

prices.forEach((price, index) => {
  adjustedPrices.push(price* (1+tax))
})

console.log(adjustedPrices)
 */
prices.forEach((price, index) => {
  const priceObj = { index: index, priceAfterTax: price* (1+tax) }
  adjustedPrices.push(priceObj)
})

console.log(adjustedPrices)