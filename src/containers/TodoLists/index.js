import React from 'react'
import Todo from '../Todo'
import Head from '../../components/Head'
import TextInput from '../../components/InputForm/TextInput'
import { useSelector } from 'react-redux'
import './style.css'
/**
* @author
* @function TodoLists
**/

const TodoLists = (props) => {

    const todoList = useSelector(state => state.todo)
    console.log(todoList)
    return (
        <div className="right-side">
            <Head name="To Do List" />
            <TextInput ph="Search..." />
            {
                todoList.todos.length > 0 ? todoList.todos.map((td, i) => {
                    return <Todo key={i}
                        name={td.name}
                        description={td.description}
                        duedate={td.duedate}
                        piority={td.piority}
                    />
                }) : null
            }

        </div>


    )

}

export default TodoLists