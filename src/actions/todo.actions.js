
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