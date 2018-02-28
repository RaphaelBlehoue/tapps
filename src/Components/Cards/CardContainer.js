import React from 'react';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
	const { children, ...rest} = props;
	return (
	<div className="page-container" {...rest}>
		<div className="page-content">
			{children}
		</div>
	</div>
)
};

CardContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired    
};

export default CardContainer;