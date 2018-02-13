import React from 'react';
import PropTypes from 'prop-types';
import FrontRoute from './Routes/FrontRoute';
import SecurityRoute from './Routes/SecurityRoute';
import userFeedContainer from './Containers/feed/userFeedContainer';
import ProfileContainer from './Containers/Security/ProfileContainer';
import SignInFormContainer from './Containers/Security/SignInFormContainer';
import SignUpFormContainer from './Containers/Security/SignUpFormContainer';


const App = ({ location }) => (
	<div>
		<FrontRoute location={location} path="/" exact component={userFeedContainer} />
		<FrontRoute location={location} path="/profile" exact component={ProfileContainer} />
		<SecurityRoute location={location} path="/accounts/signIn" exact component={SignInFormContainer} />
		<SecurityRoute location={location} path="/accounts/signUp" exact component={SignUpFormContainer} />
	</div>
);

App.propTypes = {
    location : PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;