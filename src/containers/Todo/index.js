import React from 'react'
import Button from '../../components/Button'

import './style.css'
/**
* @author
* @function TodoLists
**/

const Todo = (props) => {
    return (
        <>
            
            <div className="todo-container">

                <div className="todo-left">
                    <p className="todo-name">{props.name}</p>
                </div>
                <div className="todo-right">
                    <Button w="auto" bgc="#00bcd4" n="Detail" pd=".5rem 1rem" fs="1rem" mg=".8rem"/>
                    <Button w="auto" bgc="#d9534f" n="Remove" pd=".5rem 1rem" fs="1rem" mg=".8rem"/>
                </div>

            </div>
        </>

    )

}

export default Todo