// splitting an array into variables


const name = ['shahin', 'patowary', 'Mr', 30]

const [ firstName, lastName, ...otherInfo ] = name

console.log(firstName, lastName, otherInfo)