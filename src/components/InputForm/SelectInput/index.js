import React from 'react'
import "./style.css"
/**
* @author
* @function DateInput
**/

const SelectInput = (props) => {
    return (
        <div className="input-with-label-container">
            <div className="labell-container">
                <label htmlFor="piority">Piority</label>
            </div>

            <select name="piority"
                className="select-input"
                value={props.value}
                onChange={props.onChange}
                >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
            </select>
        </div>
    )
}

export default SelectInput