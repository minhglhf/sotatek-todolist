
export const addNewTodo = (todo) => {
    return async (dispatch) => {
        try {

            dispatch({
                type: "ADD_TODO_SUCCESS",
                payload: {
                    todo
                }
            })

        }
        catch (error) {
            console.log(error)
        }

    }
}

export const deleteTodo = (todo) => {

    return async (dispatch) => {
        try {

            dispatch({
                type: "REMOVE_TODO_SUCCESS",
                payload: {
                    todo
                }
            })

        }
        catch (error) {
            console.log(error)
        }

    }
}

export const deleteCheckTodos = (todos) => {
    console.log("cc",todos)
    return async (dispatch) => {
        try {

            dispatch({
                type: "REMOVE_TODOS_SUCCESS",
                payload: {
                    todos
                }
            })

        }
        catch (error) {
            console.log(error)
        }

    }
}

export const editTodo = (todo) => {
    // console.log("update",todo)
    return async (dispatch) => {
        try {

            dispatch({
                type: "EDIT_TODO_SUCCESS",
                payload: {
                    todo
                }
            })

        }
        catch (error) {
            console.log(error)
        }

    }
}