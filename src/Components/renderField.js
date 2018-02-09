import React from 'react';
// import PropTypes from 'prop-types';


const renderField = ({ input, label="", type="", placeholder="", classType, meta: { touched, error, invalid, warning}}) => (
    <div className={`form-group form-group-xlg has-feedback has-feedback-left ${touched && invalid ?'has-error':''}`}>
        <label htmlFor={label} className="control-label">{label}</label>
        <input type={type} placeholder={placeholder} {...input } className="form-control"/>
        <div className="form-control-feedback">
            <i className={classType}/>
        </div>
        {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span className="help-block">{warning}</span>))}
    </div>
);

/* renderField.propTypes = {
	label: PropTypes.string.isRequired,
	classType: PropTypes.string,
	type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    input: PropTypes.func.isRequired,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
        invalid: PropTypes.bool,
        warning: PropTypes.bool,
    }),
}; */

renderField.defaultProps = {
   meta: ''
};

export default renderField;
