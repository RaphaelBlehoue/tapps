import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Components/Navbars/Navbar';
import Footer from '../Components/Footer';
import SlideSwipeableComponent from '../Components/CarouselAndSlides/SlideSwipeableComponent';


const FrontLayout = (props) => (
	<div>
		<Navbar />
		<SlideSwipeableComponent />
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
