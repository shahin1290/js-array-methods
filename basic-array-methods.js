// Adding & removing Elements @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const hobbies = ['Sports', 'Coocking']

hobbies.push('Reading')
hobbies.unshift('Coding')
hobbies.pop()
hobbies.shift()

//console.log(hobbies)

hobbies[1] = 'Coding'

//console.log(hobbies)


// splice() method (only on real arrays) @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

hobbies.splice(0, 0, 'Walking', 'running') //insert

//console.log(hobbies)


hobbies.splice(0, 1) //remove

//console.log(hobbies)


hobbies.splice(-1, 1)

//console.log(hobbies)





//splice() method-Selecting range and creating copies @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const testResults = [1, 5.3, 1.5, -5, 1.5, 11]

//console.log(testResults.slice())
//console.log(testResults.slice(0, 2))

const storedResults = testResults.slice() //store a copy of a brand new array

testResults.push(10)

//console.log(testResults, storedResults)


//concat() method-Adding arrays to arrays @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const concatResults = testResults.concat([10, 5, 7])

console.log(storedResults, concatResults)


//retrive indexes

console.log(testResults.indexOf(1.5))
console.log(testResults.lastIndexOf(1.5))


// find objects in an array@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const personData = [{ name: 'shahin', name: 'kona'}]
console.log(personData.indexOf({ name: 'kona'})) // -1 (no match, compairing two different adresses in memory)

const kona = personData.find((person, index) => {
  return person.name === 'kona'
})

console.log(kona) // { name: "kona"}

kona.name = 'shohon'

console.log(personData) //[{ name: 'shahin', name: 'shohon'}]


const shahinIndex = personData.findIndex((person, index) => {
  return person.name === 'shahin'
})

console.log(shahinIndex) // 0

//Is it includes @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
console.log(pets.indexOf('cat') != -1)
// expected output: true