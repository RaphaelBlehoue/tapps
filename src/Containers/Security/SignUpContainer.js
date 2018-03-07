import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field , reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import $ from 'jquery/dist/jquery.min';
import '../../Ui/login.css';
import logo from '../../Ui/images/logo_origin.png';
import { renderReactSelect, renderField, Loading } from '../../Components/';
import CallingCodes from '../../Data/CallingCodes';
import {SignUpUser} from '../../Actions/authActions';

// Client-side validation informations
const validate = (data) => {
    const errors = {};
    if(!data.username) errors.username = "Entrez votre email pour vous connecter";
	if(!data.password) errors.password = "Le Mot de passe ne doit pas etre vide";
	// if (isValidPhoneNumber(!data.username)) errors.username = 'This field must be a valid phone number';
    return errors;
};



class SignUpContainer extends Component {

	componentWillMount() {
		const body = $('body');
		body.removeClass('login-container login-cover');
	}

	componentDidMount() {
		const body = $('body');
		body.addClass('login-container login-cover');
	}

	handleFormSignUpAndValidate = (values) => {
		console.log(values);
	};

	render() {
		const { handleSubmit, submitting } = this.props;
		const mapped = CallingCodes.map((s) => ({
				...s,
				info: `(${s.value}) - ${s.country} `,
			}));
		return <div>
				{submitting && <Loading />}
				<form onSubmit={handleSubmit(this.handleFormSignUpAndValidate)}>
					<div className="panel panel-body login-form">
						<div className="text-center">
							<div>
								<img src={logo} alt="Toudeal Authentification" />
							</div>
							<h3 className="content-group-lg display-block pt-10">Créer votre compte Toudeal</h3>
						</div>
						<Field name="countries" label="Indicatif pays" component={renderReactSelect} options={mapped} labelKey="info" valueKey="value" valueRenderer={(country) => `${country.country} (${country.value})`} />
						<Field name="phone" label="Votre numero de téléphone" placeholder="Entrez votre téléphone..." type="text" component={renderField} />
						<Field name="username" label="Entrez adresse Email (obligatoire)" placeholder="Entrez votre email..." type="email" component={renderField} />
						<Field name="password" label="Mot de passe (obligatoire)" type="password" placeholder="Mot de passe" component={renderField} />
						<div className="form-group">
							<button type="submit" className="btn bg-blue btn-block btn-xlg" disabled={submitting}>
								Créer un nouveau compte
							</button>
						</div>
						<div className="content-divider text-muted form-group">
							<span className="no-margin text-semibold">{`Vous n'avez pas de compte?`}</span>
						</div>
						<Link to="/accounts/signIn" className="btn text-orange-800 border-orange btn-flat btn-xlg btn-block content-group">
							Se Connecter
						</Link>
						<span className="help-block text-center no-margin">
							{"By continuing, you're confirming that you've read our"} <a>
								{' '}
								{'Terms & Conditions'}
							</a> and <a>Cookie Policy</a>
						</span>
					</div>
				</form>
			</div>;
	}
}

SignUpContainer.propTypes = {
	handleSubmit: PropTypes.func,
	submitting: PropTypes.bool,
};

SignUpContainer.defaultProps = {
	handleSubmit: PropTypes.func,
	submitting: PropTypes.bool,
};

const reduxFormSignup = reduxForm({
	form: 'SignUpValidation',
})(SignUpContainer);

export default connect(null, { SignUpUser })(reduxFormSignup);
