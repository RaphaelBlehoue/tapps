import React from 'react';
import PropTyes from 'prop-types';

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
    children: PropTyes.oneOfType([
        PropTyes.arrayOf(PropTyes.node),
        PropTyes.node
    ]).isRequired
};

export default FrontLayout;
