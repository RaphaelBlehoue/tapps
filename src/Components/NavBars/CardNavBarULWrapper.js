import React from 'react';
import PropTypes from 'prop-types';

const CardNavBarULWrapper = ({children, ...props}) => (
	<ul {...props}>
		{children}
	</ul>
);

CardNavBarULWrapper.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CardNavBarULWrapper;