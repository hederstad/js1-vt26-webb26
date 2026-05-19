const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoList = document.getElementById("todoList")

todoForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const todoText = todoInput.value

  console.log(todoText)

  const todoLi = document.createElement("li")

  todoLi.textContent = todoText

  todoList.appendChild(todoLi)
})