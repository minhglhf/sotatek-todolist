import React, { useState } from 'react'
import TextInput from '../../components/InputForm/TextInput'
import "./style.css"
/**
* @author
* @function NewTask
**/

import TextareaInput from '../../components/InputForm/TextareaInput'
import Button from '../../components/Button'
import DateInput from '../../components/InputForm/DateInput'
import SelectInput from '../../components/InputForm/SelectInput'
import { useDispatch } from 'react-redux'
import { addNewTodo, editTodo } from '../../actions'

const NewTask = (props) => {
  const formatDate = date => date.toISOString().slice(0, 10);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: props.id ? props.id : new Date().toLocaleString(),
    name: props.name ? props.name : "",
    description: props.description ? props.description : "",
    duedate: props.duedate ? props.duedate : formatDate(new Date()),
    piority: props.piority ? props.piority : "normal"
  });


  const addTodo = (e) => {
    e.preventDefault();

    let newTodo = {
      ...todo,
      id: new Date().toLocaleString()
    }

    dispatch(addNewTodo(newTodo))
    setTodo({ id: "", name: "", description: "", duedate: formatDate(new Date()), piority: "normal" })
  }
  const updateTodo = (e) => {
    e.preventDefault();
    
    let newTodo = {
      ...todo,
    }
    props.setDetail(-1)

    dispatch(editTodo(newTodo))
    // setTodo({ id: "", name: "", description: "", duedate: formatDate(new Date()), piority: "normal" })
  }

  return (

    <form className="form-container" onSubmit={props.bname === "Update" ? updateTodo : addTodo}>
      <TextInput onChange={(e) => { setTodo({ ...todo, name: e.target.value }) }} value={todo.name} required />
      <TextareaInput onChange={(e) => { setTodo({ ...todo, description: e.target.value }) }} value={todo.description} />
      <div className="row-input">
        <DateInput onChange={(e) => { setTodo({ ...todo, duedate: e.target.value }) }} value={todo.duedate} min={formatDate(new Date())} />
        <SelectInput onChange={(e) => { setTodo({ ...todo, piority: e.target.value }) }} value={todo.piority} />
      </div>
      <Button mg="0 0 2rem  0" n={props.bname} />
    </form>


  )
}

export default NewTask