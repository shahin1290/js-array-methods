// pulls out by coping all the elements of an iterable and gives a list of stand alone element

const names = ['shahin', 'kona', 'shohon']


const nameList = [...names] //makes a copy 

names.push('patowary')

console.log(names, nameList)

//////////////////////////////////////////////////////////////

const prices = [ 12, 41, 7, 23, 54, 12, 14]

console.log(Math.min(...prices)) //min method does not accept arrays


////// in case of array of objects it copies the addresses /////////////////////



const persons = [{name: 'shahin', age: 35}, {name: 'kona', age: 33}]

const copiedPersons = [...persons] //copies the elements which is reference value

persons.push({name: 'shohon', age: 3})

console.log(persons, copiedPersons)


persons[0].age = 25

console.log(persons, copiedPersons)


//// effectively copy array of objects/////////////////////////////////////

const secondcopiedPersons = persons.map(person => ({ name: person.name, age: person.age}))

persons[0].age = 30

console.log(persons, secondcopiedPersons)


