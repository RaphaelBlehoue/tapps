import {
    SIGN_UP_USER, SIGN_UP_USER_FAILURE, SIGN_UP_USER_SUCCESS
} from '../Constants/AuthTypes';


const INITIAL_STATE = {
  error: {},
	errorStatus: false,
};

const sign = (state = INITIAL_STATE, action={}) => {
    switch (action.type){
        case SIGN_UP_USER:
        case SIGN_UP_USER_SUCCESS:
        case SIGN_UP_USER_FAILURE:
            return { ...state,
                errorStatus: true,
                error: action.error
            };
        default:
            return state;
    }
};

export default sign;
