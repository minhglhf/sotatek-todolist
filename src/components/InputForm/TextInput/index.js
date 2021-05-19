import React from 'react'
import './style.css'
/**
* @author
* @function Head
**/

const TextInput = (props) => {
  return (
    <input type="text" name="name"
      placeholder={props.ph ? props.ph : "Add new task ..."}
      className="text-input"
      onChange={props.onChange}
      value={props.value}
      required={props.required ? true : false}
    />
  )
}

export default TextInput