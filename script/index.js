const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoList = document.getElementById("todoList")

todoForm.addEventListener("submit", (event) => {
  event.preventDefault()

  //Validering
  if (todoInput.value === "") {
    alert("Du måste skriva något i inputfältet")
    return
  } else if (todoInput.value.length < 3) {
    alert("Du måste skriva minst 3 tecken")
    return
  }

  const todoText = todoInput.value

  console.log(todoText)

  const todoLi = document.createElement("li")
  todoLi.classList.add("list-group-item", "d-flex", "justify-content-between")

  todoLi.textContent = todoText

  todoList.appendChild(todoLi)

  //Btn container
  const btnContainer = document.createElement("div")
  btnContainer.classList.add("d-flex", "gap-2")

  //Delete Button
  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("btn", "btn-danger", "btn-sm")

  deleteBtn.textContent = "X"

  deleteBtn.addEventListener("click", () => {
    todoLi.remove()
  })

  btnContainer.appendChild(deleteBtn)

  //Done button
  const doneButton = document.createElement("button")
  doneButton.classList.add("btn", "btn-success", "btn-sm")

  doneButton.textContent = "Färdig"

  doneButton.addEventListener("click", () => {
    todoLi.classList.toggle("text-muted")
  })

  btnContainer.appendChild(doneButton)

  todoLi.appendChild(btnContainer)

  todoInput.value = ""
  todoInput.focus()
})

/* 
? event.preventDefault() 

Ett formulär försöker som standard skicka data och ladda om sidan.
Eftersom vi vill hantera formuläret själva med JavaScript
stoppar vi det vanliga beteendet med preventDefault().
Annars hinner sidan laddas om innan vi kan jobba vidare med värdet.
*/