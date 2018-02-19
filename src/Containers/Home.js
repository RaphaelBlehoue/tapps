import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
    return (
        <div>
            Home page
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Home);