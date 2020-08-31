// Adding & removing Elements @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const hobbies = ['Sports', 'Coocking']

hobbies.push('Reading')
hobbies.unshift('Coding')
hobbies.pop()
hobbies.shift()

//console.log(hobbies)

hobbies[1] = 'Coding'

//console.log(hobbies)


// Splice method (only on real arrays) @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

hobbies.splice(0, 0, 'Walking', 'running') //insert

//console.log(hobbies)


hobbies.splice(0, 1) //remove

//console.log(hobbies)


hobbies.splice(-1, 1)

//console.log(hobbies)





//Selecting range and creating copies @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const testResults = [1, 5.3, 1.5, -5, 11]

console.log(testResults.slice())
console.log(testResults.slice(0, 2))

const storedResults = testResults.slice() //store a copy of a brand new array

testResults.push(10)

console.log(testResults, storedResults)



