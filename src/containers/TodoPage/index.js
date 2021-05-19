import React from 'react'
import './style.css'
import Head from '../../components/Head'
import NewTask from '../NewTask'
/**
* @author
* @function TodoLists
**/

const TodoPage = (props) => {
    return (
        <div className="container">
            <NewTask />
            <div className="right-side">
                <Head name="To Do List" />
            </div>
        </div>
    )

}

export default TodoPage