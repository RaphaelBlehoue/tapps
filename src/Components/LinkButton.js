import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkButton = ({className, children, url,  ...rest}) => (
    <Link to={url} className={className} {...rest}>
       {children}
    </Link>
);

LinkButton.propTypes = {
   className: PropTypes.string.isRequired,
   children: PropTypes.string.isRequired,
   url: PropTypes.any
}

export default LinkButton;
