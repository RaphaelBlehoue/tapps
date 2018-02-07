import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import ContainerSlideSwipeableComponent from '../WidgetComponents/ContainerSlideSwipeableComponent';


const FrontLayout = props => (
	<div>
		<Navbar />
		<ContainerSlideSwipeableComponent />
		<div className="page-container">
			<div className="page-content">{props.children}</div>
		</div>
		<Footer />
	</div>
);

FrontLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default FrontLayout;
