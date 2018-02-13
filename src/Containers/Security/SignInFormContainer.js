import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import $ from 'jquery/dist/jquery.min';
import '../../Ui/styles/login.css';
import logo from '../../Ui/images/logo_origin.png';
import SecurityLayout from '../../Layouts/SecurityLayout';
import renderField from '../../Components/renderField';
import { SignInUser } from '../../Actions/authActions';


class SignInFormContainer extends Component {

	constructor(props) {
		super(props);
		this.handleFormSignInAndValidate = this.handleFormSignInAndValidate.bind(this);
	}

	componentWillMount() {
		const body = $('body');
		body.removeClass('login-container login-cover');
	}

	componentDidMount() {
		const body = $('body');
		body.addClass('login-container login-cover');
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.authenticated === true && nextProps.auth.status === 'authenticated') {
			this.props.history.push('/');
		}
	}

	handleFormSignInAndValidate = values => {
		this.props.SignInUser(values);
	};

	render() {
		const { handleSubmit, submitting } = this.props;
		return (
			<SecurityLayout>
				<form onSubmit={handleSubmit(this.handleFormSignInAndValidate)}>
					<div className="panel panel-body login-form">
						<div className="text-center">
							<div>
								<img src={logo} alt="Toudeal Authentification" />
							</div>
							<h5 className="content-group-lg display-block pt-10">Connectez-vous à votre compte</h5>
						</div>
						{this.props.errorMessage &&
							!this.props.errorMessage.authenticated && (
								<div className="alert alert-danger no-border">{this.props.errorMessage}</div>
							)}
						<Field
							name="username"
							label="Entrez adresse Email (obligatoire)"
							placeholder="Entrez votre email..."
							type="text"
							component={renderField}
						/>
						<Field
							name="password"
							label="Mot de passe (obligatoire)"
							type="password"
							component={renderField}
							placeholder="Mot de passe"
						/>
						<div className="form-group">
							<div className="row">
								<div className="col-sm-8 text-right col-xs-offset-4">
									<a>Mot de passe oublié ?</a>
								</div>
							</div>
						</div>
						<div className="form-group">
							<button type="submit" className="btn bg-blue btn-block btn-xlg" disabled={submitting}>
								Se Connecter
							</button>
						</div>
						<div className="content-divider text-muted form-group">
							<span className="no-margin text-semibold">{`Vous n'avez pas de compte?`}</span>
						</div>
						<Link
							to="/accounts/signUp"
							className="btn text-orange-800 border-orange btn-flat btn-xlg btn-block content-group"
						>
							Créer un nouveau compte
						</Link>
						<span className="help-block text-center no-margin">
							{`By continuing, youre confirming that you've read our`} <a>{`Terms & Conditions`}</a> and{' '}
							<a>Cookie Policy</a>
						</span>
					</div>
				</form>
			</SecurityLayout>
		);
	}
}

// Client-side validation informations

const validate = data => {
    const errors = {};
    if(!data.username) errors.username = "Entrez votre email pour vous connecter";
	if(!data.password) errors.password = "Le Mot de passe ne doit pas etre vide";
	// if (isValidPhoneNumber(!data.username)) errors.username = 'This field must be a valid phone number';
    return errors;
};

function mapStateToProps (state) {
	return {
		errorMessage: state.auth.error,
		auth: state.auth
	}
}

SignInFormContainer.propTypes = {
	handleSubmit: PropTypes.func,
	submitting: PropTypes.bool,
	SignInUser: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push:PropTypes.func.isRequired
	}).isRequired
};

SignInFormContainer.defaultProps = {
	handleSubmit: PropTypes.func,
	submitting: PropTypes.bool,
};

const reduxFormSignin = reduxForm({
	form: 'SignInValidation',
	validate,
})(SignInFormContainer);

export default connect(mapStateToProps, { SignInUser })(reduxFormSignin);