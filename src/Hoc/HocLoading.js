import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Loading } from '../Components';
import { fetchUser } from '../Actions/userActions';

class HocLoading extends React.Component {
	
	componentWillMount() {
		const { user } = this.props;
		if (!user.infoUser) {
			this.props.fetchUser();
		}
	}

	render() {
		const { isAuthenticated, children } = this.props;
		if (isAuthenticated === 'AWAIT') {
			return <Loading />;
		}
		return <div>{children}</div>;
	}
}

HocLoading.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
	fetchUser: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.string.isRequired,
	user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated,
	user: state.user
});

export default withRouter(connect(mapStateToProps, { fetchUser })(HocLoading));
