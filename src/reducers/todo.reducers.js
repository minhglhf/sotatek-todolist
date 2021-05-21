
const initState = {
    todos: [],
    total: 0
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO_SUCCESS": {
            let temp = state.todos;
            temp.push(action.payload.todo)
            state = {
                ...state,
                todos: temp,
                total: temp.length
            }
            break;
        }
        case "REMOVE_TODO_SUCCESS": {
            console.log(action.payload.todo)
            let temp = state.todos;
            temp = temp.filter(td => td.id !== action.payload.todo.id)
            state = {
                ...state,
                todos: temp,
                total: temp.length
            }
            break;
        }
        case "REMOVE_TODOS_SUCCESS": {
            console.log(action.payload.todos)
            let temp = state.todos;
            action.payload.todos.map(td => {
                let tempIn = temp.findIndex((te) => te.id === td.id)
                temp.splice(tempIn, 1)
            })
            console.log(temp)
            state = {
                ...state,
                todos: temp,
                total: temp.length
            }
            break;
        }
        case "EDIT_TODO_SUCCESS": {
            console.log(action.payload.todo)
            let temp = state.todos;
            let updateIndex = temp.findIndex(td => td.id === action.payload.todo.id)
            temp[updateIndex] = { ...action.payload.todo }
            state = {
                ...state,
                todos: temp,
                total: temp.length
            }
            break;
        }
        default: {
            break;
        }
    }

    return state;
}

export default todoReducer;