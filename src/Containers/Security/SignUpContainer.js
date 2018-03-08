import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field , reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import $ from 'jquery/dist/jquery.min';
import { renderReactSelect, renderField, Loading } from '../../Components';
import { isValidNumber } from 'libphonenumber-js';
import { FormatPhoneNumber }  from '../../Validations';
import CallingCodes from '../../Data/CallingCodes';
import { SignUpUser } from '../../Actions/authActions';
import logo from '../../Ui/images/logo_origin.png';
import '../../Ui/login.css';


class SignUpContainer extends Component {

	constructor(props) {
		super(props);
		this.handleFormSignUpAndValidate = this.handleFormSignUpAndValidate.bind(this);
	}

	componentWillMount = () => {
		const body = $('body');
		body.removeClass('login-container login-cover');
	}

	componentDidMount = () => {
		const body = $('body');
		body.addClass('login-container login-cover');
	}

	handleFormSignUpAndValidate = (data) => {
			console.log(data);
	};


	render() {
		const { handleSubmit, submitting, pristine } = this.props;
		const mapped = CallingCodes.map((s) => ({...s, info:`(${s.value}) - ${s.country}`}));
		return (
			<div>
				{ submitting && <Loading />}
				<form onSubmit={handleSubmit(this.handleFormSignUpAndValidate)}>
					<div className="panel panel-body login-form">
						<div className="text-center">
							<div>
								<img src={logo} alt="Toudeal Authentification" />
							</div>
							<h3 className="content-group-lg display-block pt-10">Créer votre compte Toudeal</h3>
						</div>
						<Field
							name="countries"
							label="Selectionnez l'indicatif de votre pays"
							placeholder="Selectionnez l'indicatif pays"
							component={renderReactSelect}
							options={mapped}
							labelKey="info"
							valueKey="value"
							valueRenderer={(country) => `${country.country} (${country.value})`}
						 />
						<Field name="phone" label="Entrez votre numero de téléphone" placeholder="Entrez votre téléphone..." type="text" component={renderField}/>
						<Field name="email" label="Entrez une adresse Email (obligatoire)" placeholder="Entrez votre email..." type="email" component={renderField} />
						<Field name="password" label="Entrez un Mot de passe (obligatoire)" type="password" placeholder="Mot de passe" component={renderField} />
						<div className="form-group">
							<button type="submit" className="btn bg-blue btn-block btn-xlg" disabled={ pristine || submitting}>
								{ !submitting ? 'Créer un nouveau compte' : 'Loading...'}
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
			</div>
		);
	}
}

const validate = (data) => {
		const errors = {};
		if(!data.password) errors.password = "Le Mot de passe ne doit pas etre vide";
		if(!data.email) errors.email = "Entrez une adresse email pour continuer";
		if(!data.phone) errors.phone = "Entrez un numero de téléphone valide pour continuer";
		if(!data.countries) errors.countries = "Faites le choix de l'indicatif pays";
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) errors.email = 'Cette Adresse Email est invalid';
		if (data.phone && data.countries){
			 if (!isValidNumber(FormatPhoneNumber(data))) errors.phone = `Ce numero de téléphone est invalid pour la zone ${data.countries.country}`;
		}
		return errors;
};


SignUpContainer.propTypes = {
	handleSubmit: PropTypes.func,
	submitting: PropTypes.bool,
	pristine: PropTypes.bool
};

SignUpContainer.defaultProps = {
	handleSubmit: PropTypes.func,
	submitting: PropTypes.bool,
	pristine: PropTypes.bool
};

const reduxFormSignup = reduxForm({
	form: 'SignUpValidation',
	validate,
})(SignUpContainer);

export default connect(null, { SignUpUser })(reduxFormSignup);
