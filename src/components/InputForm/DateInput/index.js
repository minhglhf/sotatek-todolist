import React from 'react'
import "./style.css"
/**
* @author
* @function DateInput
**/

const DateInput = (props) => {
    return (

        <div className="input-with-label-container">
            <div className="labell-container">
                <label htmlFor="date-input">Due Date</label>
            </div>

            <input id="date-input"
                type="date"
                className="date-input"
                value={props.value}
                onChange={props.onChange}
                min={props.min}
            />
        </div>

    )
}

export default DateInput