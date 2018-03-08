import React from 'react';
import PropTypes from 'prop-types';

const renderSelect = (props) => {
    const renderSelectOptions = (key, index) => (
            <option 
                key={`${index}`} 
                value={key}
            >
                {props.options[key]}
            </option>
    )

    if (props && props.options){
        return (
            <div className="form-group">
                <label className="display-block" htmlFor={props.label}>{props.label}</label>
                <select className="bootstrap-select" {...props.input}>
                    <option value="">Code pays</option>
                    {Object.keys(props.options).map(renderSelectOptions)}
                </select>
            </div>
        )
    }
    return <div></div>
};

renderSelect.propTypes = {
    input: PropTypes.object.isRequired,
    options:PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
};

export default renderSelect;