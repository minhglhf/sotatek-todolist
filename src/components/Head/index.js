import React from 'react'
import './style.css'
/**
* @author
* @function Head
**/

const Head = (props) => {
  return(
    <div className="head-container">
        <h3 className="head-name"> 
            {props.name}
        </h3>
        {props.children}
    </div>
   )

 }

export default Head