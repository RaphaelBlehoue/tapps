import React from 'react';
import PropTypes from 'prop-types';

const styleDivs = {
	position: 'relative',
	zIndex: 100,
};

const CardNavBarBody = ({ children, ...props }) =>  (
    <div {...props} style={styleDivs}>
        {children}
    </div>
);


CardNavBarBody.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default CardNavBarBody;