import React from 'react'
import "./style.css"
/**
* @author
* @function DateInput
**/

const SelectInput = (props) => {
    return (
        <div className="input-with-label-container">
            <label htmlFor="piority">Piority</label>
            <select name="piority" className="select-input">
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
            </select>
        </div>
    )
}

export default SelectInput