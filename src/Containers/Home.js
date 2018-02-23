import React from 'react';
import { connect } from 'react-redux';

const Home = () => <div>Home page</div>

// const mapStateToProps = (state) => { isAuthenticated: state.auth.isAuthenticated }

export default connect(null)(Home);