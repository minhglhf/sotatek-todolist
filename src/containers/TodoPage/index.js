import React from 'react'
import './style.css'
import NewTask from '../NewTask'
import TodoLists from '../TodoLists'
/**
* @author
* @function TodoLists
**/

const TodoPage = (props) => {
    return (
        <div className="container">
            <NewTask />
            <TodoLists />
        </div>
    )

}

export default TodoPage