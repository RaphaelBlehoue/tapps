import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE} from '../Constants';

const INITIALSTATE = {
	isAuthenticated: 'AWAIT',
	loading: false
};

const user = (state=INITIALSTATE, action) => {
    switch (action.type) {
		case GET_USER_REQUEST:
			return { ...state, loading: true, isAuthenticated: 'AWAIT' };
		case GET_USER_SUCCESS:
			return { ...state, loading: false, isAuthenticated: 'AUTH', ...(action.data.payload || action.user) };
		case GET_USER_FAILURE:
			return { ...state, loading: false, isAuthenticated: 'UNAUTH' };
		default:
			return state;
	}
}

export default user;