import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { history } from './Stores/ConfigureStore';
import { HocLoading, AuthorizationRoutes, NoUserLoggedAccess } from './Hoc';
import userFeedContainer from './Containers/feed/userFeedContainer';
import ProfileContainer from './Containers/Security/ProfileContainer';
import SignInFormContainer from './Containers/Security/SignInFormContainer';
import SignUpFormContainer from './Containers/Security/SignUpFormContainer';
import Home from './Containers/Home';

const App = () => (
	<ConnectedRouter history={history}>
		<div>
			<HocLoading>
				<Switch>
					<Route path="/accounts/signIn" exact component={NoUserLoggedAccess(SignInFormContainer)} />
					<Route path="/accounts/signUp" exact component={NoUserLoggedAccess(SignUpFormContainer)} />
					<Route path="/feed" exact component={AuthorizationRoutes(userFeedContainer)} />
					<Route path="/profile" exact component={AuthorizationRoutes(ProfileContainer)} />
					<Route exact path="/" component={Home} />
				</Switch>
			</HocLoading>
		</div>
	</ConnectedRouter>
);

export default App;
