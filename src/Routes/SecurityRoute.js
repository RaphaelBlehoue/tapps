import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


const SecurityRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={ props =>
            <Component {...props }/>
        }
    />
);

SecurityRoute.propTypes = {
    component : PropTypes.func.isRequired
};

export default SecurityRoute;

