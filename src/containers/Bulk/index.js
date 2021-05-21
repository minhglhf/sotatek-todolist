import React from 'react'
import Button from '../../components/Button'
import './style.css'
/**
* @author
* @function TodoLists
**/

import { useDispatch } from 'react-redux'
import { deleteCheckTodos } from '../../actions'

const Bulk = (props) => {

    const dispatch = useDispatch();

    const removeTodos = (tds) => {
        props.setCheck([])
        dispatch(deleteCheckTodos(tds))
    }

    return (
        <>
            <div className="bulk-container">

                <div className="bulk-left">

                    <p className="bulk-name">Bulk Action : </p>
                </div>
                <div className="bulk-right">
                    <Button w="auto" bgc="#2196f3" n="Done" pd=".7rem 1rem" fs="1rem" mg=".8rem" />
                    <Button w="auto" bgc="#d9534f" n="Remove" pd=".7rem 1rem" fs="1rem" mg=".8rem" ocl={() => removeTodos(props.todos)}/>
                </div>

            </div>
        </>

    )

}

export default Bulk