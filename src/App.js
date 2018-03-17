import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { history } from './Stores/ConfigureStore';
import { HocLoading, AuthorizationRoutes, NoAccesForUserLogged } from './Hoc';
import SecurityContainerPages from './Containers/Layouts/SecurityContainerPages';
import FrontAppContainerPages from './Containers/Layouts/FrontAppContainerPages';
import StoreAppContainerPages from './Containers/Layouts/StoreAppContainerPages';
import PublicSellerContainerPages from './Containers/Layouts/PublicSellerContainerPages'
import NotFoundPage from './Containers/NotFoundPage';
import Home from './Containers/Home';

/** Retirer la proprieté exact des routes organiser comme SecurityContainerPages  */

const App = () => (
	<ConnectedRouter history={history}>
		<div>
			<HocLoading>
					<Switch>
						<Route path="/accounts" component={NoAccesForUserLogged(SecurityContainerPages)}/>
						<Route path="/app" component={AuthorizationRoutes(FrontAppContainerPages)}/>
						<Route path="/stores" component={AuthorizationRoutes(StoreAppContainerPages)}/>
					<Route path="/selling" component={PublicSellerContainerPages} />
						<Route exact path="/" component={Home} />
						<Route component={NotFoundPage}/>
					</Switch>
			</HocLoading>
		</div>
	</ConnectedRouter>
);

export default App;
