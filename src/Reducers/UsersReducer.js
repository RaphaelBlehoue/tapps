import {
    SIGN_IN_USER_REQUEST, SIGN_IN_USER_FAILURE, SIGN_IN_USER_SUCCESS
} from '../Constants/User';


const INITIAL_STATE = {
    userData: null,
    status: null,
    error: null,
    loading: false
};

const usersReducer = (state = INITIAL_STATE, action) => {
    let errors;
    switch (action.type){
        case SIGN_IN_USER_REQUEST:
            return { ...state, status:'signin', loading:true };
        case SIGN_IN_USER_FAILURE:
            errors = action.data || { message: action.message};
            return { ...state, status:'failure', error: errors, loading:false };
        case SIGN_IN_USER_SUCCESS:
            return { ...state, userData: action.data, error: null, loading:false };
        default:
            return state;
    }
};

export default usersReducer;
