import React from 'react'
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import StoreContainer from '../Store/StoreContainer';
import StoreCreateContainer from '../Store/StoreCreateContainer';

const StoreAppContainerPages = ({ match }) => (
    <div>
        <Switch>
            <Route exact path={`${match.path}/create}`} component={StoreCreateContainer}/>
            <Route exact path={`${match.path}/dashboard}`} component={StoreContainer}/>
            <Redirect to={`${match.url}`}/>
        </Switch>
    </div>
);

StoreAppContainerPages.propTypes = {
	match: PropTypes.shape({
		path: PropTypes.node,
	}).isRequired,
};

export default StoreAppContainerPages;
