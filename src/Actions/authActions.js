import {
    SIGN_IN_USER_REQUEST,
    SIGN_IN_USER_FAILURE,
    SIGN_IN_USER_SUCCESS
} from '../Constants/index';
import { AuthCheckSucess } from "../Actions/loggedActions";
import api from '../config';


export function SignInUserRequest(formValues) {
    return {
        type: SIGN_IN_USER_REQUEST,
        formValues
    }
}
export function SignInUserSuccess(data) {
    return {
        type: SIGN_IN_USER_SUCCESS,
        data
    }
}
export function SignInUserFailure(errors) {
    return {
        type: SIGN_IN_USER_FAILURE,
        errors
    }
}


// User Sign In Action Event dispatch async Action

export function SignInUser(credentials) {
    return  async (dispatch) => {
        dispatch(SignInUserRequest(credentials));
        try {
            const res = await api.auth.login(credentials);
            localStorage.setItem('__Host-toudeal', res.data.token);
            dispatch(SignInUserSuccess(res.data));
            dispatch(AuthCheckSucess());
        } catch(error) {
            dispatch(SignInUserFailure(error.response.data));
        }
    };
}

export function SignUpUser (data) {    
    console.log(data); 
}