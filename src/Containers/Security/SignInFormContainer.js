import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field , reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import $ from 'jquery/dist/jquery.min';
import '../../Ui/styles/login.css';
import logo from '../../Ui/images/logo_origin.png';
import SecurityLayout from '../../Layouts/SecurityLayout';
import renderField from '../../Components/renderField';
import { SignInUser } from "../../Actions/UserActions";

// Client-side validation informations
const validate = data => {
    const errors = {};
    if(!data.username) errors.username = "Entrez votre email ou numéro de téléphone pour vous connecter";
    if(!data.password) errors.password = "Le Mot de passe ne doit pas etre vide";
    return errors;
};

class SignInFormContainer extends Component {

	componentWillMount() {
		const body = $('body');
		body.removeClass('login-container login-cover');
	}

	componentDidMount() {
		const body = $('body');
		body.addClass('login-container login-cover');
	}

	handleFormSignInAndValidate = values => {
		this.props.SignInUser(values);
	};

	render() {
		const { handleSubmit, submitting } = this.props;
		return <SecurityLayout>
				<form onSubmit={handleSubmit(this.handleFormSignInAndValidate)}>
					<div className="panel panel-body login-form">
						<div className="text-center">
							<div>
								<img src={logo} alt="" />
							</div>
							<h5 className="content-group-lg display-block pt-10">
								Connectez-vous à votre compte
							</h5>
						</div>
						<Field name="username" type="text" component={renderField} label="@Email ou numero de téléphone" classType="icon-user text-muted" />
						<Field name="password" type="password" component={renderField} label="@Mot de passe" classType="icon-lock2 text-muted" />
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
						<NavLink to="/profile" className="btn text-orange-800 border-orange btn-flat btn-xlg btn-block content-group">
							Créer un nouveau compte
						</NavLink>
						<span className="help-block text-center no-margin">
							{"By continuing, you're confirming that you've read our"} <a>
								{' '}
								{'Terms & Conditions'}
							</a> and <a>Cookie Policy</a>
						</span>
					</div>
				</form>
			</SecurityLayout>;
	}
}

export default connect(null, {SignInUser})(reduxForm({
    form: 'SignInValidation',
    validate
})(SignInFormContainer));
