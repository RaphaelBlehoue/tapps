import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import $ from 'jquery/dist/jquery.min';
import '../../Ui/login.css';
import logo from '../../Ui/images/logo_origin.png';
import {renderField, Loading } from '../../Components/';
import { SignInUser } from '../../Actions/authActions';


class SignInContainer extends Component {

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
	


	handleFormSignInAndValidate = (values) => {
		this.props.SignInUser(values);
	};

	render() {
		const { handleSubmit, submitting, isError, errors } = this.props;
		return (
			<div>
				{ submitting && <Loading/>}
				<form onSubmit={handleSubmit(this.handleFormSignInAndValidate)}>
					<div className="panel panel-body login-form">
						<div className="text-center">
							<div>
								<img src={logo} alt="Toudeal Authentification" />
							</div>
							<h3 className="content-group-lg display-block pt-10">
								Connectez-vous à votre compte
							</h3>
						</div>
						{ isError && <div className="alert alert-danger no-border">{errors}</div> }
						<Field name="username" label="Entrez adresse Email (obligatoire)" placeholder="Entrez votre email..." type="text" component={renderField} />
						<Field name="password" label="Mot de passe (obligatoire)" type="password" placeholder="Mot de passe" component={renderField} />
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
						<Link to="/accounts/signUp"  className="btn text-orange-800 border-orange btn-flat btn-xlg btn-block content-group">
							Créer un nouveau compte
						</Link>
						<span className="help-block text-center no-margin">
							{`By continuing, youre confirming that you've read our`} <a>{`Terms & Conditions`}</a> and <a
							>
								Cookie Policy
							</a>
						</span>
					</div>
				</form>			
			</div>
		);
	}
}

// Client-side validation informations

const validate = (data) => {
    const errors = {};
    if(!data.username) errors.username = "Entrez votre email pour vous connecter";
	if(!data.password) errors.password = "Le Mot de passe ne doit pas etre vide";
	// if (isValidPhoneNumber(!data.username)) errors.username = 'This field must be a valid phone number';
    return errors;
};


const mapStateToProps = (state) => ({
		errors: state.auth.error,
		isError: state.auth.errorStatus
	})

SignInContainer.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	submitting: PropTypes.bool.isRequired,
	SignInUser: PropTypes.func.isRequired,
	isError: PropTypes.bool,
	errors: PropTypes.string
};

SignInContainer.defaultProps = {
	isError: false,
	errors:null
};

SignInContainer.defaultProps = {
	isError: PropTypes.bool,
	errors: PropTypes.string
};

const reduxFormSignin = reduxForm({
	form: 'SignInValidation',
	validate,
})(SignInContainer);

export default connect(mapStateToProps, { SignInUser })(reduxFormSignin);