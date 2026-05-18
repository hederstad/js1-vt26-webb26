const title = document.getElementById("title")
const counter = document.getElementById("counter")
const btnAdd = document.getElementById("btnAdd")
const btnSubtract = document.getElementById("btnSubtract")
const btnColor = document.getElementById("btnColor")
const colorBox = document.getElementById("colorBox")

title.innerText = "Testa dom-manipulation"

console.log(title.innerText)

let count = 0

btnAdd.addEventListener("click", () => {
  count++

  console.log(count)

  counter.innerText = `Räknaren är: ${count}`
})

btnSubtract.addEventListener("click", () => {
  count--

  console.log(count)

  counter.innerText = `Räknaren är: ${count}`
})

const colors = ["red", "blue", "violet", "green"]

btnColor.addEventListener("click", () => {
  colorBox.classList.add(colors[3])
})