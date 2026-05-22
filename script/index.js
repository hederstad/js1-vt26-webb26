const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoList = document.getElementById("todoList")

const createTodoLi = (todoText) => {
    const todoLi = document.createElement("li")
    todoLi.classList.add("list-group-item", "d-flex", "justify-content-between")

    todoLi.textContent = todoText

    const ButtonContainer = createBtnContainer(todoLi)

    todoLi.appendChild(ButtonContainer)

    return todoLi
}

const createBtnContainer = (todoLi) => {
    const btnContainer = document.createElement("div")
    btnContainer.classList.add("d-flex", "gap-2")

    const deleteBtn = createDeleteBtn(todoLi)
    const doneBtn = createDoneBtn(todoLi)

    btnContainer.appendChild(deleteBtn)
    btnContainer.appendChild(doneBtn)

    return btnContainer
}

const createDeleteBtn = (todoLi) => {
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm")

    deleteBtn.textContent = "X"

    deleteBtn.addEventListener("click", () => {
        todoLi.remove()
    })

    return deleteBtn
}

const createDoneBtn = (todoLi) => {
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("btn", "btn-success", "btn-sm")

    doneBtn.textContent = "Färdig"

    doneBtn.addEventListener("click", () => {
        todoLi.classList.toggle("text-muted")
    })

    return doneBtn
}

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

    const todoLi = createTodoLi(todoText)

    todoList.appendChild(todoLi)

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

    // {
    //   id: 1;
    //   text: "städa";
    //   done: false
    //   create: Date
    // }
