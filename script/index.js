const fruits = ["🍌 banan", "🍎 äpple", "🍊 apelsin", "🥝 kiwi"]

console.log("Hela arrayen med frukter", fruits)
console.log("Antal frukter:", fruits.length)
console.log("Första frukten:", fruits[0])

//Lägger till på sista platsen i arrayen
fruits.push("🍍 ananas")
fruits.push("🥭 mango")

console.log("Hela arrayen med frukter, efter .push()", fruits)

//Tar bort sista instansen i arrayen
// fruits.pop()
// fruits.pop()

console.log("Sista frukten i listan är:", fruits.at(-1))

//.unshift("test") lägger till en instans på fösta positionen i arrayen
console.log("Först frukten:", fruits[0])
fruits.unshift("🍍 ananas")
console.log("Först frukten:", fruits[0])
fruits.unshift("🥭 mango")
console.log("Först frukten:", fruits[0])

//.shift() tar bort första instansen i arrayen [0]
fruits.shift()
fruits.shift()
console.log("Först frukten:", fruits[0])

//.includes() returnerar true/false

console.log("Fruits innehåller ett äpple: ", fruits.includes("🍎 äpple"))

if (fruits.includes("🍎 äpple")) {
  console.log("Det finns äpple!")
} else {
  console.log("Det finns inte äpple!")
}

//.indexof() hitta arrayposition för en viss instans
console.log("Banan ligger på plats: ", fruits.indexOf("🍌 banan"))
console.log("Apelsin ligger på plats: ", fruits.indexOf("🍊 apelsin"))

//.slice()
const someFruit = fruits.slice(2, 6)

console.log(someFruit)
console.log(fruits)

console.log(fruits.join(", "))