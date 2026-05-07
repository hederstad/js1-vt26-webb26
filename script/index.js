// Funktioner
// En funktion är ett namngivet kodblock som vi kan köra flera gånger.
// Det gör koden lättare att läsa, återanvända och ändra på ett enda ställe.

// Varför ska vi använda funktioner?
// Utan funktioner behöver vi ofta skriva nästan samma kod om och om igen.
// Här upprepas samma typ av utskrift fyra gånger, men med olika namn.

console.log("Jag heter: " + "Johan")
console.log("Jag heter: " + "Elin")
console.log("Jag heter: " + "Ali")
console.log("Jag heter: " + "Lisa")

// DRY betyder "Don't repeat yourself".
// Tanken är att undvika upprepning genom att samla återkommande kod i en funktion.

// Parametrar skrivs mellan parenteserna när funktionen skapas.
// De fungerar som lokala variabler inne i funktionen.
// Här är name och age parametrar.

function hello(name, age) {
  // Den här raden visar att koden inuti funktionen körs först när funktionen anropas.
  console.log("🔥 funktion 🔥")

  // Parametrarna name och age får sina värden från argumenten i funktionsanropet.
  console.log("Jag heter:", name, "och jag är:", age, "år gammal")
}

// Argument är de faktiska värdena som skickas in när vi anropar funktionen.
// I hello("Johan", 45) är "Johan" det första argumentet och 45 det andra.
// JavaScript kopplar argumenten till parametrarna i samma ordning:
// "Johan" hamnar i name och 45 hamnar i age.
hello("Johan", 45)
hello("Elin", 63)
hello("Ali", 25)
hello("Lisa", 32)

// Arrow function är ett kortare sätt att skriva en funktion.
// Den här versionen sparas i konstanten arrowFunction.
// Den fungerar på liknande sätt som hello-funktionen ovan.
const arrowFunction = (name, age) => {
  console.log("🏹 Arrow function 🏹")
  console.log("Jag heter:", name, "och jag är:", age, "år gammal")
}

// Här anropar vi arrowFunction och skickar in två argument.
arrowFunction("Gustav", 71)

// Om en arrow function bara har en parameter kan parenteserna tas bort.
// Om funktionen bara gör en enda sak kan måsvingarna också tas bort.
// Då blir uttrycket efter pilen funktionens hela innehåll.
const arrowFunctionShort = name => console.log("Jag heter:", name)

console.log("Arrow short 🏹")
arrowFunctionShort("Sabina")

//Hoisting