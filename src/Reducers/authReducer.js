import {
    SIGN_IN_USER_REQUEST, SIGN_IN_USER_FAILURE, SIGN_IN_USER_SUCCESS
} from '../Constants/index';


const INITIAL_STATE = {
	status: null,
	satusCode: null,
	error: null,
	header: null,
	loading: false,
	authenticated: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
    let errorCode;
    let errorMessage;
    let headerCode;
    switch (action.type){
        case SIGN_IN_USER_REQUEST:
            return { ...state, loading:true };
        case SIGN_IN_USER_FAILURE:
            errorCode = action.payload.data.code;
            errorMessage = action.payload.data.message.messageError;
            headerCode = action.payload.data.message.messageKey;
            return { ...state, 
                satusCode: errorCode,
                error: errorMessage,
                loading: false,
                header: headerCode,
                status: action.payload.statusText 
            };
        case SIGN_IN_USER_SUCCESS:
            return { ...state, error: null, loading: false, authenticated: true, status: 'authenticated' };
        default:
            return state;
    }
};

export default authReducer;
