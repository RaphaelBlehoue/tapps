import axios from 'axios';
import { AuthParams } from './Utils';

const API_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API : process.env.REACT_APP_DEV_API;

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
	user: {
		fetch: () => axios.get(`${API_URL}/user/logged`, options),
		check: (field, params) => axios.get(`${API_URL}/accounts/check/${field}/${params}`),
		register: (data) => axios.post(`${API_URL}/accounts/signin`, data),
	},
};
