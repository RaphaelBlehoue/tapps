import React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const GettingStartContainer = ({ isAuth }) => (
    <div className="text-center">
        <h1>Getting Start Page</h1>
      <Link to="/store/create" className="btn btn-primary">{ isAuth ? 'Commencer à vendre' : 'Configurer ma boutique'}</Link>
    </div>
);

GettingStartContainer.propTypes = {
   isAuth: PropTypes.string
}

const mapStateToProps = (state) => ({
   isAuth : state.user.isAuthenticated
});


export default connect(mapStateToProps)(GettingStartContainer);
