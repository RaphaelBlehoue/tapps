import React from 'react';
import PropTypes from 'prop-types';
import Phone from 'react-phone-number-input';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';

const renderPhoneField = ({ input, label, type, placeholder, classType}) => (
    <div>
        <label htmlFor={label} className="control-label">{label}</label>
        <Phone id={label} type={type} placeholder={placeholder} {...input }/>
    </div>
);

renderPhoneField.propTypes = {
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

renderPhoneField.defaultProps = {
	meta: '',
	placeholder: '',
	classType: '',
};

export default renderPhoneField;
