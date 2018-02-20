import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'production' ? 'http://api.toudeal.com/api' : 'http://toudeal-api.test/api';


const token = localStorage.getItem('tdtk');
const options = {
	headers: {
		Authorization: token ? `Bearer ${token}` : '',
	    'Content-Type': 'application/json',
	},
};


export default {
	auth: {
		login: credentials => axios.post(`${API_URL}/login_check`, credentials),
	},
	logged: {
		getLogged: () =>
			axios.get(`${API_URL}/user/logged`, options),
	},
};
