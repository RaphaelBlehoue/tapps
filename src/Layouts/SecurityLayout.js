import React from 'react';
import PropTypes from 'prop-types';

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
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default SecurityLayout;