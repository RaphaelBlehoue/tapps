import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spinner } from '../Components';
import { fetchUser } from '../Actions/userActions';


class HocLoading extends React.Component {

    componentWillMount() {
        const { user } = this.props;
        if (!user.infoUser){
            this.props.fetchUser();
        }
        console.log('isMount');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname){
            // Ajouter la verification du token (si existe) si different dispatch getUserFailure()
            console.log('prevProps', prevProps.location.pathname);
            console.log('currentProps', this.props.location.pathname);
        }
    }
    

    render() {
        const { isAuthenticated, children } = this.props;
        if (isAuthenticated === 'AWAIT') {
			return <Spinner/>;
		}
        return (
            <div>
                {children}
            </div>
        );
    }
}

HocLoading.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    fetchUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.string.isRequired,
    location : PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
		isAuthenticated: state.user.isAuthenticated,
		user: state.user,
        location: state.router.location
	});

export default withRouter(connect(mapStateToProps, { fetchUser })(HocLoading));