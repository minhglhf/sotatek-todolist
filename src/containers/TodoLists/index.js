import React, { useState} from 'react'
import Todo from '../Todo'
import Head from '../../components/Head'
import TextInput from '../../components/InputForm/TextInput'
import { useSelector } from 'react-redux'
import NewTask from '../NewTask'
import './style.css'
import Bulk from '../Bulk'
import { BsCheckBox, BsSquare } from 'react-icons/bs';
/**
* @author
* @function TodoLists
**/

const sortDate = (d1, d2) => {
    let a = d1?.duedate?.split('-');
    let b = d2?.duedate?.split('-');
    return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
}

const TodoLists = (props) => {
    const [detail, setDetail] = useState(-1);
    const [check, setCheck] = useState([])
    const [search, setSearch] = useState("");
    // console.log(sortDate("2021-05-20", "2021-05-19"))
    console.log(check)

    const addCheck = (todo) => {
        setCheck(prevItems => [...prevItems, todo]);
    }

    const removeCheck = (todo) => {
        setCheck(check.filter(c => c.id !== todo.id));
    }
    const todoList = useSelector(state => state.todo)
    return (
        <div className="right-side">
            <Head name="To Do List" />
            <TextInput ph="Search..." onChange={(e) => { setSearch(e.target.value) }} value={search} />
            {
                todoList.todos.length > 0 ? todoList.todos.sort(sortDate).filter(td => td.name.indexOf(search) !== -1).map((td, i) => {
                    return (
                        <div key={i} style={{ width: "100%", display: "flex", flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <Todo
                                name={td.name}
                                description={td.description}
                                duedate={td.duedate}
                                piority={td.piority}
                                td={td}
                                id={td.id}
                                ind={i}
                                setDetail={setDetail}
                                check={check}
                                setCheck={setCheck}
                                detail={detail}
                                checkicon={
                                    <div style={{ width: "auto", height: "auto", cursor: "pointer", marginLeft: ".5rem" }}
                                        onClick={() => {
                                            if (check.filter(c => c.id === td.id).length > 0) {
                                                removeCheck(td)
                                            } else {
                                                addCheck(td)
                                            }
                                        }}>
                                        {
                                            check.filter(c => c.id === td.id).length > 0 ?
                                                <BsCheckBox size={25} style={{ cursor: "pointer", padding: '.5rem' }} />
                                                :
                                                <BsSquare size={20} style={{ cursor: "pointer", padding: '.5rem' }} />
                                        }
                                    </div>
                                }
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
                }) : <h1>No Todo Results found</h1>
            }
            {
                check.length > 0 ? <Bulk todos={check} setCheck={setCheck}/> : null
            }
        </div>


    )

}

export default TodoLists