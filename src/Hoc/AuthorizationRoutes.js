import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';


const AuthorizationRoutes = (WrapperComponent) => {
    class WithAuthorizationRoutes extends Component {

		    static propTypes = {
      			isAuthenticated: PropTypes.string.isRequired,
				dispatch: PropTypes.func.isRequired				  
			};
			
			componentWillMount() {
				this.checkAndRedirect();
			}

			componentDidUpdate(prevProps) {
				if (prevProps.isAuthenticated !== this.props.isAuthenticated){
					this.checkAndRedirect();
				}
			}

			checkAndRedirect() {
				const { dispatch } = this.props;
				if (this.props.isAuthenticated === "UNAUTH") {
					dispatch(push("/accounts/signIn"));
				}
			}

			render() {
				return (
					<div className="authenticated">
						{
							this.props.isAuthenticated === "AUTH" 
							? <WrapperComponent {...this.props} /> 
							: null
						}
					</div>
				);
			}
		}

        const mapStateToProps = (state) => ({
            isAuthenticated: state.user.isAuthenticated,
			user: state.user		
		})
		
    return withRouter(connect(mapStateToProps)(WithAuthorizationRoutes));
}

export default AuthorizationRoutes;

