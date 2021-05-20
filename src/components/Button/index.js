import React from 'react'
import './style.css'
/**
* @author
* @function Head
**/

const Button = (props) => {
  const { h, w, bgc, fs, n, pd, mg, ocl } = props;
  return (
    <button className="button"
      style={{ width: w, height: h, backgroundColor: bgc, padding: pd, fontSize: fs, margin: mg }}
      onClick={ocl}>{n ? n : "Add"}</button>
  )

}

export default Button