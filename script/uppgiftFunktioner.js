//! Uppgift 1
function greetUser(name) {
    if (!name) {
        return "Hej gäst 👋";
    } else {
        return "Hej " + name;
    }
}

console.log(greetUser("Stina"))

const greetUserArrow = (name) => {
    return "Hej " + (name || "gäst")
}

console.log(greetUserArrow("johan"))

//! Uppgift 2
function isValidUser(name, age) {
    if (name && age >= 18) {
        return true
    }
    else {
        return false
    }
}

console.log('isValidUser', isValidUser('Edvard', 25))

// function isValidUser(name, age) {

//     if (typeof name !== "string" || typeof age !== "number" || age < 18) {
//         console.log("false");
//     } else {
//         console.log("true");
//     }
// }

// isValidUser("johan", 45)

function isValidUser(name, age) {
    return !!(name && age >= 18); // gör om till boolean
}

//! Uppgift 3
let count = 0;

function incrementCounter() {
    count++;
    return count;
}

for (let i = 0; i < 10; i++) {
    console.log(incrementCounter())
}

//!Uppgift 4
let userVisits = 0

function handleUser(name, age) {
    if (name && age >= 18) {
        userVisits++
        return `Hej ${name} (besök:${userVisits})`

        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    }
    else {
        return 'Ogitlg användare'
    }
}

console.log(handleUser("Johan", 15))
console.log(handleUser("Johan", 45))
console.log(handleUser("Johan", 45))
console.log(handleUser("Johan", 45))


//* BONUS
const userName = prompt("Vad heter du?")
const userAge = prompt("Hur gammal är du?")

function isValidUserPrompt(name, age) {
    if (name && age >= 18) {
        return "✅ Du är en valid user"
    } else {
        return "🛑 Du är inte en valid user"
    }
}

console.log(isValidUserPrompt(userName, userAge))

// Javascript är löst typat