import React, { useState } from 'react'
import Todo from '../Todo'
import Head from '../../components/Head'
import TextInput from '../../components/InputForm/TextInput'
import { useSelector } from 'react-redux'
import NewTask from '../NewTask'
import './style.css'

/**
* @author
* @function TodoLists
**/

const TodoLists = (props) => {
    const [detail, setDetail] = useState(-1);

    const todoList = useSelector(state => state.todo)
    return (
        <div className="right-side">
            <Head name="To Do List" />
            <TextInput ph="Search..." />
            {
                todoList.todos.length > 0 ? todoList.todos.map((td, i) => {
                    return (
                        <div key={i} style={{ width: "100%", display: "flex", flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <Todo
                                name={td.name}
                                description={td.description}
                                duedate={td.duedate}
                                piority={td.piority}
                                td={td}
                                ind={i}
                                setDetail={setDetail}
                                detail={detail}
                            />
                            {
                                detail === i ? (
                                    <div style={{ border: "1px solid black", borderTop: "none", width: "90%", display: "flex", flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                        <NewTask id={td.id} name={td.name} description={td.description} duedate={td.duedate} piority={td.piority} bname="Update" />
                                    </div>
                                ) : null
                            }


                        </div>

                    )
                }) : null
            }

        </div>


    )

}

export default TodoLists