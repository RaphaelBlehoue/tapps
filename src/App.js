import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from "react-router-redux";
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from "./Stores/ConfigureStore";

import userFeedContainer from './Containers/feed/userFeedContainer';
import ProfileContainer from './Containers/Security/ProfileContainer';
import SignInFormContainer from './Containers/Security/SignInFormContainer';
import SignUpFormContainer from './Containers/Security/SignUpFormContainer';
import Home from './Containers/Home';


const renderSpiner = () => (
	<div>Loading ...</div>
);

const SecureRoute = ({ isAuthenticated, component: Component, ...rest }) => {
	if (isAuthenticated === 'AWAIT') {
		return renderSpiner();
	}
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated === 'AUTH' ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/accounts/signIn', state: { from: props.location } }} />
				)
			}
		/>
	);
};


const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
	if (isAuthenticated === 'AWAIT') {
		return renderSpiner();
	}
	return (
		<Route 
			{...rest}
			render={ props  => (
				isAuthenticated === 'UNAUTH' 
				? (<Component {...props} />) 
				: (<Redirect to='/feed' />)
			)}
		/>
	);
}

const App = ({ isAuthenticated }) => (
	<ConnectedRouter history={history}>
		<div>
			<Switch>
				<SecureRoute isAuthenticated={isAuthenticated} path="/feed" exact component={userFeedContainer} />
				<SecureRoute isAuthenticated={isAuthenticated} path="/profile" exact component={ProfileContainer} />
				<Route exact path="/" component={Home} />
				<PublicRoute
					isAuthenticated={isAuthenticated}
					path="/accounts/signIn"
					exact
					component={SignInFormContainer}
				/>
				<PublicRoute
					isAuthenticated={isAuthenticated}
					path="/accounts/signUp"
					exact
					component={SignUpFormContainer}
				/>
			</Switch>
		</div>
	</ConnectedRouter>
);

App.propTypes = {
	isAuthenticated: PropTypes.string.isRequired
};

PublicRoute.propTypes = {
	isAuthenticated: PropTypes.string.isRequired,
	component: PropTypes.func.isRequired,
};

SecureRoute.propTypes = {
	isAuthenticated: PropTypes.string.isRequired,
	component: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return { 
		isAuthenticated: state.logged.isAuthenticated,
		checkToken: state.logged.token
	};
};

export default connect(mapStateToProps)(App);