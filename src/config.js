import axios from 'axios';
import { AuthParams } from './Utils';

const API_URL = process.env.NODE_ENV === 'production' ? 'http://api.toudeal.com/api' : 'http://toudeal-api.test/api';

const token = AuthParams.getToken();
if (token) {
	axios.defaults.headers.common.authorization = `Bearer ${token}`;
} else {
	delete axios.defaults.headers.common.authorization;
}

const options = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export default {
	auth: {
		login: (credentials) => axios.post(`${API_URL}/login_check`, credentials),
	},
	logged: {
		getLogged: () => axios.get(`${API_URL}/user/logged`, options),
	},
};
