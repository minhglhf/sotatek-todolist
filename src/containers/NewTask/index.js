import React from 'react'
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

const NewTask = (props) => {
  return (
    <div className="left-side">
      <Head name="New Task" />
      <form className="form-container" >
        <TextInput />
        <TextareaInput />
        <div className="row-input">
          <DateInput />
          <SelectInput />
        </div>

        <Button />
      </form>
    </div>

  )
}

export default NewTask