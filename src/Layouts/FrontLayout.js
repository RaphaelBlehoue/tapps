import React from 'react';
import PropTypes from 'prop-types';
import NavbarContainer from '../Containers/NavbarContainer';
import Footer from '../Components/Footer';
import SlideSwipeableComponent from '../Components/CarouselAndSlides/SlideSwipeableComponent';


const FrontLayout = ({children}) => (
	<div>
		<NavbarContainer />
		<SlideSwipeableComponent />
		<div className="page-container">
			<div className="page-content">
				{children}
			</div>
		</div>
		<Footer/>
	</div>
);

FrontLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default FrontLayout;
