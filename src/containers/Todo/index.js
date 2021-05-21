import React from 'react'
import Button from '../../components/Button'
import './style.css'

import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../actions'

const Todo = (props) => {

    const dispatch = useDispatch();

    const ShowDetail = () => {
        // setOpenDetail(!openDetail);
        if (props.detail === props.ind) props.setDetail(-1)
        else props.setDetail(props.ind)
    }

    const removeTodo = (td) => {
        props.setCheck([])
        dispatch(deleteTodo(td))
    }

    return (
        <>
            <div className="todo-container">
                <div className="todo-left">
                    {props.checkicon}
                    <p className="todo-name">{props.name}</p>
                </div>
                <div className="todo-right">
                    <Button w="auto" bgc="#00bcd4" n="Detail" pd=".7rem 1rem" fs="1rem" mg=".8rem" ocl={ShowDetail} />
                    <Button w="auto" bgc="#d9534f" n="Remove" pd=".7rem 1rem" fs="1rem" mg=".8rem" ocl={() => removeTodo(props.td)} />
                </div>
            </div>
        </>

    )

}

export default Todo