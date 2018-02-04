import React from 'react';
import PropTyes from 'prop-types';

import Navbar from '../../Ui/Navbar';
import Footer from '../../Ui/Footer';

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
