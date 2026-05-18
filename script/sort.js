/*
SORTERING I JAVASCRIPT

1. sort() utan callback
- JavaScript använder standardsortering
- värden jämförs som text
- fungerar ofta för vanliga ord
- fungerar dåligt för nummer

2. sort() muterar originalarrayen
- originalarrayen ändras direkt

3. toSorted()
- skapar en ny sorterad array
- originalarrayen ändras inte

4. toSorted((a, b) => a - b)
- används för nummer
- negativt tal => a före b
- positivt tal => b före a
- 0 => ingen skillnad

5. sortering av objekt
- a och b är objekt
- du jämför en property, t.ex. age

6. localeCompare()
- används för text
- bättre för alfabetisk sortering
- särskilt bra för svenska tecken som å, ä och ö
*/

//Sort strings
const fruits = ["mango", "apple", "banana", "kiwi"]

console.log("Fruits utan sortering: ", fruits)

const sortedFruits = fruits.toSorted()

console.log("Fruits med sortering: ", sortedFruits)

//Sort numbers
const listOfNumbers = [5, 2, 12, 9, 8, 7, 25]

console.log(listOfNumbers)

listOfNumbers.sort((a, b) => a - b)

console.log("Sorterade nummer: ", listOfNumbers)

//Sort objects
const students = [
    { id: 1, name: "Bob", age: 19, active: false },
    { id: 2, name: "Charlie", age: 25, active: true },
    { id: 3, name: "Diana", age: 28, active: true },
    { id: 4, name: "Elias", age: 17, active: false },
    { id: 5, name: "Alice", age: 23, active: true },

]

const sortStudentsAge = students.toSorted((a, b) => a.age - b.age)

console.log(sortStudentsAge)

//toLocalCompare
const letters = ["z", "ä", "a"]

const sortedLetters = letters.toSorted((a, b) => {
    return a.localeCompare(b, "sv")
})

console.log(sortedLetters)