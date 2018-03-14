import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE} from '../Constants/UserType';

const INITIALSTATE = {
	isAuthenticated: 'AWAIT',
	loading: false
};

const user = (state=INITIALSTATE, action) => {
    switch (action.type) {
		case GET_USER:
			return { ...state, loading: true, isAuthenticated: 'AWAIT' };
		case GET_USER_SUCCESS:
			return { ...state, loading: false, isAuthenticated: 'AUTH', infoUser: action.data.payload || action.data };
		case GET_USER_FAILURE:
			return { ...state, loading: false, isAuthenticated: 'UNAUTH' };
		default:
			return state;
	}
}

export default user;
