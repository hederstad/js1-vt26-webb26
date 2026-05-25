const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoHelp = document.getElementById("todoHelp")
const todoList = document.getElementById("todoList")

let todos = []

const createTodo = (todoText) => {
    const todo = {
        id: crypto.randomUUID(),
        text: todoText,
        done: false
    }

    return todo
}

const saveTodosToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

const loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todos")

    if (storedTodos) {
        todos = JSON.parse(storedTodos)
    }
}

const createTodoListItem = (todo) => {
    const todoLi = document.createElement("li")
    todoLi.classList.add("list-group-item", "d-flex", "justify-content-between")

    if (todo.done) {
        todoLi.classList.add("bg-success-subtle")
    } else {
        todoLi.classList.remove("bg-success-subtle")
    }

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
        todos = todos.filter(currentTodo => currentTodo.id !== todo.id)
        saveTodosToLocalStorage()
        renderTodoList()
    })

    return deleteBtn
}

const createDoneBtn = (todo) => {
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("btn", "btn-success", "btn-sm")

    doneBtn.textContent = "Färdig"

    doneBtn.addEventListener("click", () => {
        todo.done = !todo.done
        saveTodosToLocalStorage()
        renderTodoList()
    })

    return doneBtn
}

const renderTodoList = () => {
    todoList.innerHTML = ""

    if (todos.length === 0) {
        return
    }

    todos.forEach((todo) => {
        const todoListItem = createTodoListItem(todo)

        todoList.appendChild(todoListItem)
    })
}

todoForm.addEventListener("submit", () => {
    // event.preventDefault()
    todoHelp.innerText = "Skriv minst 3 tecken"
    todoHelp.classList.remove("text-danger")

    //Validering
    if (todoInput.value === "") {
        todoHelp.innerText = "Du måste skriva något i inputfältet"
        todoHelp.classList.add("text-danger")
        return
    } else if (todoInput.value.length < 3) {
        todoHelp.innerText = "Du måste skriva minst 3 tecken"
        todoHelp.classList.add("text-danger")
        return
    }

    const todoText = todoInput.value

    const todo = createTodo(todoText)

    todos.push(todo)

    saveTodosToLocalStorage()

    renderTodoList()

    todoInput.value = ""
    todoInput.focus()
})

loadTodosFromLocalStorage()
renderTodoList()

/*
? event.preventDefault()
 
Ett formulär försöker som standard skicka data och ladda om sidan.
Eftersom vi vill hantera formuläret själva med JavaScript
stoppar vi det vanliga beteendet med preventDefault().
Annars hinner sidan laddas om innan vi kan jobba vidare med värdet.
*/