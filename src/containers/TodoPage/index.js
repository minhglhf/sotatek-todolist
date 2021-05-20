import React from 'react'
import './style.css'
import NewTask from '../NewTask'
import TodoLists from '../TodoLists'
import Head from '../../components/Head'
/**
* @author
* @function TodoLists
**/

const TodoPage = (props) => {
    return (
        <div className="container">
            <div className="left-side">
                <Head name="New Task" />
                <NewTask />
            </div>
            <TodoLists />
        </div>
    )

}

export default TodoPage