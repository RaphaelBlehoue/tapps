import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const renderReactSelect = (props) => (
    <div className={`form-group form-group-xlg has-feedback has-feedback-left ${props.touched && props.invalid ?'has-error':''}`}>
    	<label htmlFor={props.label} className="control-label">{props.label}</label>
		<Select
			{...props}
			value={props.input.value}
			onChange={(value) => props.input.onChange(value)}
			onBlur={() => props.input.onBlur(props.input.value)}
			options={props.options}
        />
        {props.touched && ((props.error && <span className="help-block">{props.error}</span>) || (props.warning && <span className="help-block">{props.warning}</span>))}
	</div>
);

renderReactSelect.propTypes = {
	label: PropTypes.string.isRequired,
	input: PropTypes.shape({
		onChange: PropTypes.func.isRequired,
		onBlur: PropTypes.func.isRequired,
		value: PropTypes.any.isRequired,
	}).isRequired,
	options: PropTypes.array.isRequired,
	error: PropTypes.any,
	touched: PropTypes.any,
	warning: PropTypes.any,
	invalid: PropTypes.any,
};

renderReactSelect.defaultProps = {
	touched: '',
	error: '',
    warning: '',
    invalid:'',
};

export default renderReactSelect;