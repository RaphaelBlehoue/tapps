import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom';
import BenefitsPageContainer from '../PublicSeller/BenefitsPageContainer';
import EligibleCategoriesContainer from '../PublicSeller/EligibleCategoriesContainer';
import FaqContainer from '../PublicSeller/FaqContainer';
import GettingStartContainer from '../PublicSeller/GettingStartContainer';

const PublicSellerContainerPages = ({ match }) => (
    <div>
      <Switch>
         <Route path={`${match.path}/getting-start`} exact component={GettingStartContainer}/>
         <Route path={`${match.path}/services/approval-categories`} exact component={EligibleCategoriesContainer}/>
         <Route path={`${match.path}/benefits`} exact component={BenefitsPageContainer}/>
         <Route path={`${match.path}/faq`} exact component={FaqContainer}/>
         <Redirect to={`${match.url}`}/>
      </Switch>
   </div>
  );


PublicSellerContainerPages.propTypes = {
	match: PropTypes.shape({
		path: PropTypes.node,
	}).isRequired,
};

export default PublicSellerContainerPages
