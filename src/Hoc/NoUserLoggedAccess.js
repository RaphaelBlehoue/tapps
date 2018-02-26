import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const NoUserLoggedAccess = (WrapperComponent) => {
        class WithNoUserLoggedAccess extends Component {
			componentWillMount() {
                console.log('mount');
				console.log('isAuth', this.props.isAuthenticated);
			}

			componentWillReceiveProps(nextProps) {
				console.log('nextProps', nextProps);
			}

			componentDidUpdate(prevProps) {
				if (prevProps.location.pathname !== this.props.location.pathname) {
					// Ajouter la verification du token (si existe) si different dispatch getUserFailure()
					console.log('prevProps', prevProps.location.pathname);
					console.log('currentProps', this.props.location.pathname);
				}
			}

			render() {
				return (
                    <div>
						<WrapperComponent {...this.props} />
                    </div>
                );
			}
		}

        WithNoUserLoggedAccess.propTypes = {
            isAuthenticated: PropTypes.string.isRequired,
        };

        const mapStateToProps = (state) => {
            return {
                isAuthenticated: state.user.isAuthenticated,
                user: state.user,
                location: state.router.location
            }
        }
        return withRouter(connect(mapStateToProps)(WithNoUserLoggedAccess))
}

export default NoUserLoggedAccess;

