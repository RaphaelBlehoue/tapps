import React from 'react';
import PropTypes from 'prop-types';
import Headroom from "../../../node_modules/react-headroom/dist/index";



const animationTransition = {
  webkitTransition: 'all .5s ease-in-out',
  mozTransition: 'all .5s ease-in-out',
  oTransition: 'all .5s ease-in-out',
  transition: 'all .5s ease-in-out',
};


const CardNavBarContentGroupLgWrapper = (props) => {
	const { children } = props;
	return (
		<Headroom style={animationTransition}>
			<div className="content-group-lg">
				<div className="navbar-component">
					{children}
				</div>
			</div>
		</Headroom>
	);
}

CardNavBarContentGroupLgWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default CardNavBarContentGroupLgWrapper;