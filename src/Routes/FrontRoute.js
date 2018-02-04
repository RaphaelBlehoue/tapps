import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


const FrontRoute = ({ component: Component, ...rest }) => (
    <div>
        <Route
            {...rest}
            render={ props =>
                <Component {...props }/>
            }
        />
    </div>
);

FrontRoute.propTypes = {
    component : PropTypes.func.isRequired
};

export default FrontRoute;
