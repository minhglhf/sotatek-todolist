import React from 'react'
import "./style.css"
/**
* @author
* @function DateInput
**/

const DateInput = (props) => {
    return (

        <div className="input-with-label-container">
            <label htmlFor="date-input">Due Date</label>
            <input id="date-input" type="date" className="date-input" />
        </div>

    )
}

export default DateInput