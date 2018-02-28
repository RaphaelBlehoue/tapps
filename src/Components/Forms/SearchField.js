import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({label, type, placeholder, input, classes}) => (
    <div className="form-group">
		<div className="input-group">
			<div>
				<input id={label} type={type} placeholder={placeholder} {...input} className={classes} />
			</div>
			<div className="input-group-btn">
				<button type="submit" className="btn btn-primary btn-xlg">
					<i className="icon-search4 text-size-base" />
				</button>
			</div>
		</div>
    </div>
);

SearchField.propTypes = {
	classes: PropTypes.string,
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	classType: PropTypes.string,
	input: PropTypes.shape({
		onChange: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
	}).isRequired,
};

SearchField.defaultProp = {
	classes: 'form-control input-xlg input-xlg-2'
};

export default SearchField;