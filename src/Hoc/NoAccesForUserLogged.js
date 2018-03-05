import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';

const NoAccesForUserLogged = (WrapperComponent) => {
        class WithNoAccesForUserLogged extends Component {

		    static propTypes = {
      			isAuthenticated: PropTypes.string.isRequired,
				dispatch: PropTypes.func.isRequired				  
			};

			componentWillMount() {
				this.checkAndRedirect();
			}

			componentWillReceiveProps(nextProps) {
				if (nextProps.isAuthenticated !== this.props.isAuthenticated) {
					this.checkAndRedirect();
				}
			}

			componentDidUpdate() {
				this.checkAndRedirect();
			}

			checkAndRedirect() {
				const { dispatch } = this.props;
				if (this.props.isAuthenticated === "AUTH") {
					dispatch(push("/app/feed"));
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

        const mapStateToProps = (state) => ({
                isAuthenticated: state.user.isAuthenticated,
                user: state.user
		});
		
        return withRouter(connect(mapStateToProps)(WithNoAccesForUserLogged));
}

export default NoAccesForUserLogged;

