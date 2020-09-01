const prices = [10, 12, 15, 30, 5]
const tax = 0.2

/* for(const price of prices){
  adjustedPrices.push(price* (1+tax))
}

console.log(adjustedPrices)

prices.forEach((price, index) => {
  adjustedPrices.push(price* (1+tax))
})

console.log(adjustedPrices)
 */
const adjustedPrices = prices.map((price, index) => {
   return { index: index, priceAfterTax: price * (1 + tax) }
})

console.log(adjustedPrices)