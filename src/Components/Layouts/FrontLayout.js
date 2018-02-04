import React from 'react';
import PropTyes from 'prop-types';

import Navbar from '../Utils/Navbar';
import Footer from '../Utils/Footer';

const FrontLayout = (props) => (
    <div>
        <Navbar />
             {props.children}
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
