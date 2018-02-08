import React from 'react';
import PropTypes from 'prop-types';


const renderField = ({ input, label, type, classType, meta: { touched, error, invalid, warning}}) => (
    <div className={`form-group has-feedback has-feedback-left ${touched && invalid ?'has-error':''}`}>
        <label htmlFor={label} className="control-label"/>
        <input type={type} placeholder={label} {...input } className="form-control"/>
        <div className="form-control-feedback">
            <i className={classType}/>
        </div>
        {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span className="help-block">{warning}</span>))}
    </div>
);

renderField.propTypes = {
    label: PropTypes.string.isRequired,
    classType: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

renderField.defaultProps = {
   meta: ''
};

export default renderField;
