import { AUTH_CHECK_REQUEST, AUTH_CHECK_SUCCESS, AUTH_CHECK_FAILURE } from '../Constants/index';

const INITIALSTATE = {
	isAuthenticated: 'PENDING',
	loading: false,
};

const logged = (state=INITIALSTATE, action) => {
    switch (action.type) {
		case AUTH_CHECK_REQUEST:
			return { ...state, loading: true, isAuthenticated: 'AWAIT' };
		case AUTH_CHECK_SUCCESS:
			return {...state, loading: false, isAuthenticated: 'AUTH'}
		case AUTH_CHECK_FAILURE:
			return {...state, loading: false, isAuthenticated: 'UNAUTH'}
		default:
			return state;
	}
}

export default logged;