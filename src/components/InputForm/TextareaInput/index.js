import React from 'react'
import './style.css'
/**
* @author
* @function Head
**/

const TextareaInput = (props) => {
  return (
    <div className="inputarea-with-label-container">

      <div className="label-container">
        <label htmlFor="area-input">
          Description
        </label>
      </div>


      <textarea id="area-input"
        onChange={props.onChange}
        value={props.value}>

      </textarea>
    </div>

  )
}

export default TextareaInput