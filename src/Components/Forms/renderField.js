import React from 'react';
import PropTypes from 'prop-types';

const renderField = ({ input, label, type, placeholder, classType, meta: { touched, error, invalid, warning}}) => (
		<div className={`form-group form-group-xlg has-feedback has-feedback-left ${touched && invalid ?'has-error':''}`}>
			<label htmlFor={label} className="control-label">{label}</label>
			<input id={label} type={type} placeholder={placeholder} {...input } className="form-control"/>
			<div className="form-control-feedback">
				<i className={classType}/>
			</div>
			{touched && ((error && <span className="help-block">{error}</span>) || (warning && <span className="help-block">{warning}</span>))}
		</div>	
	)


renderField.propTypes = {
	input: PropTypes.shape({
		onChange: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
	}).isRequired,
	meta: PropTypes.shape({
		touched: PropTypes.any,
		error: PropTypes.any,
	}),
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	classType: PropTypes.string,
};

renderField.defaultProps = {
	meta: '',
	placeholder: '',
	classType: '',
};


export default renderField;
