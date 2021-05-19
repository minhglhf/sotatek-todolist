
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
        default: {
            break;
        }
    }

    return state;
}

export default todoReducer;