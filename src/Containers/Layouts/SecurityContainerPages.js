import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SignInContainer, SignUpContainer } from '../Security';


/** la redirection vers match.url correspont à une page de redirection par defaut si
 * aucune url ou path ne correspont
 */
const SecurityContainerPages = ({ match }) => {
	console.log(match);
	return (
	<div>
		<div className="page-container">
			<div className="page-content">
				<div className="content-wrapper">
					<Switch>
						<Route path={`${match.path}/SignIn`} exact component={SignInContainer} />
						<Route path={`${match.path}/SignUp`} exact component={SignUpContainer} />
						<Redirect to={`${match.url}`}/>
					</Switch>
				</div>
			</div>
		</div>
	</div>
)};


SecurityContainerPages.propTypes = {
	match: PropTypes.shape({
		path: PropTypes.node
	}).isRequired
};

export default SecurityContainerPages;
