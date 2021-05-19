import React from 'react'
import './style.css'
/**
* @author
* @function Head
**/

const TextareaInput = (props) => {
  return (
    <div className="inputarea-with-label-container">

      <label htmlFor="area-input">
        Description
      </label>

      <textarea id="area-input">

      </textarea>
    </div>

  )
}

export default TextareaInput