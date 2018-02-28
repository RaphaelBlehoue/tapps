import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Footer } from '../../Components';
import NavbarContainer from '../NavbarContainer';
import { userFeedContainer, ProfileContainer } from '../Apps'


/** la redirection vers match.url correspont à une page de redirection par defaut si
 * aucune url ou path ne correspont
 */
const FrontAppContainerPages = ({match}) => (
	<div>
		<NavbarContainer />
			<Switch>
				<Route path={`${match.path}/feed`} exact component={userFeedContainer}/>
				<Route path={`${match.path}/user/:slug}`} exact component={ProfileContainer} />				
				<Redirect to={`${match.url}`}/>
			</Switch>
		<Footer/>
	</div>
);

FrontAppContainerPages.propTypes = {
	match: PropTypes.shape({
		path: PropTypes.node,
	}).isRequired,
};

export default FrontAppContainerPages;
