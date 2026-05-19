const happyBtn = document.getElementById("happyBtn")
const angryBtn = document.getElementById("angryBtn")
const tiredBtn = document.getElementById("tiredBtn")
const hypedBtn = document.getElementById("hypedBtn")
const moodBox = document.getElementById("moodBox")
const resetBtn = document.getElementById("resetBtn")

//DRY Don´t repeat yourself

const setMood = (text, color) => {
    moodBox.classList.remove("red", "violet", "blue", "green")
    moodBox.textContent = ""
    moodBox.textContent = text
    moodBox.classList.add(color)
}

happyBtn.addEventListener("click", () => {
    setMood(happyBtn.textContent, "green")
})

angryBtn.addEventListener("click", () => {
    setMood(angryBtn.textContent, "red")
})

tiredBtn.addEventListener("click", () => {
    setMood(tiredBtn.textContent, "blue")
})

hypedBtn.addEventListener("click", () => {
    setMood(hypedBtn.textContent, "violet")
})

resetBtn.addEventListener("click", () => {
    moodBox.classList.remove("red", "violet", "blue", "green")
    moodBox.textContent = ""
})

