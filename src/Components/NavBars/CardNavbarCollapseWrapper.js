import React from 'react';
import PropTypes from 'prop-types';

const CardNavbarCollapseWrapper = ({children, ...props}) => (
    <div {...props}>
         {children}
    </div>
);

CardNavbarCollapseWrapper.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CardNavbarCollapseWrapper;