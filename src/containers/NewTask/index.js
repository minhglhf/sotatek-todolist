import React, { useState } from 'react'
import TextInput from '../../components/InputForm/TextInput'
import "./style.css"
/**
* @author
* @function NewTask
**/

import Head from '../../components/Head'
import TextareaInput from '../../components/InputForm/TextareaInput'
import Button from '../../components/Button'
import DateInput from '../../components/InputForm/DateInput'
import SelectInput from '../../components/InputForm/SelectInput'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../../actions'

const NewTask = (props) => {
  const formatDate = date => date.toISOString().slice(0, 10);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({ name: "", description: "", duedate: formatDate(new Date()), piority: "normal" });

  const addTodo = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(todo))
    setTodo({ name: "", description: "", duedate: formatDate(new Date()), piority: "normal" })
  }

  return (
    <div className="left-side">
      <Head name="New Task" />
      <form className="form-container" onSubmit={addTodo}>
        <TextInput onChange={(e) => { setTodo({ ...todo, name: e.target.value }) }} value={todo.name} required />
        <TextareaInput onChange={(e) => { setTodo({ ...todo, description: e.target.value }) }} value={todo.description} />
        <div className="row-input">
          <DateInput onChange={(e) => { setTodo({ ...todo, duedate: e.target.value }) }} value={todo.duedate} min={formatDate(new Date())} />
          <SelectInput onChange={(e) => { setTodo({ ...todo, piority: e.target.value }) }} value={todo.piority} />
        </div>

        <Button />
      </form>
    </div>

  )
}

export default NewTask