/* eslint-disable */
import React from 'react';
import PropTyes from 'prop-types';

const SecurityLayout = (props) => (
    <div>
        <div className="page-container">
            <div className="page-content">
                <div className="content-wrapper">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
);

SecurityLayout.propTypes = {
    children: PropTyes.oneOfType([
        PropTyes.arrayOf(PropTyes.node),
        PropTyes.node
    ]).isRequired
};

export default SecurityLayout;