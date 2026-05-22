const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoList = document.getElementById("todoList")

const todos = []

const createTodo = (todoText) => {
    const todo = {
        id: crypto.randomUUID(),
        text: todoText,
        done: false
    }
    
    return todo
}

const createTodoListItem = (todo) => {
    const todoLi = document.createElement("li")
    todoLi.classList.add("list-group-item", "d-flex", "justify-content-between")

    todoLi.textContent = todo.text

    const ButtonContainer = createBtnContainer(todo)

    todoLi.appendChild(ButtonContainer)

    return todoLi
}

const createBtnContainer = (todo) => {
    const btnContainer = document.createElement("div")
    btnContainer.classList.add("d-flex", "gap-2")

    const deleteBtn = createDeleteBtn(todo)
    const doneBtn = createDoneBtn(todo)

    btnContainer.appendChild(deleteBtn)
    btnContainer.appendChild(doneBtn)

    return btnContainer
}

const createDeleteBtn = (todo) => {
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm")

    deleteBtn.textContent = "X"

    deleteBtn.addEventListener("click", () => {
        //Ta bort aktuellt object från todos arrayen
    })

    return deleteBtn
}

const createDoneBtn = (todo) => {
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("btn", "btn-success", "btn-sm")

    doneBtn.textContent = "Färdig"

    doneBtn.addEventListener("click", () => {
        todoLi.classList.toggle("text-muted")
    })

    return doneBtn
}

const renderTodoList = () => {
    if(todos.length === 0) {
        return
    }

    todos.forEach((todo) => {
        createTodoListItem(todo)
    })
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

    const todo = createTodo(todoText)

    todos.push(todo)

    renderTodoList()

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
