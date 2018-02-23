import {
    SIGN_IN_USER_REQUEST, SIGN_IN_USER_FAILURE, SIGN_IN_USER_SUCCESS
} from '../Constants';


const INITIAL_STATE = {};

const auth = (state = INITIAL_STATE, action={}) => {
    switch (action.type){
        case SIGN_IN_USER_REQUEST:
            return { ...state, loading:true };
        case SIGN_IN_USER_FAILURE:
            return { ...state, 
                satusCode: action.code,
                error: action.errors.message.messageError,
                errorStatus:true,
                loading: false,
                header: action.errors.message.messageKey,
                status: action.errors.statusText 
            };
        case SIGN_IN_USER_SUCCESS:
            return { ...state,
                loading: false,
                email: action.data.payload.username || action.data.username,
                role : action.data.payload.roles || action.data.roles
            };  
        default:
            return state;
    }
};

export default auth;
