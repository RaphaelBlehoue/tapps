import {
    SIGN_IN_USER_REQUEST,
    SIGN_IN_USER_FAILURE,
    SIGN_IN_USER_SUCCESS
} from '../Constants';
import { AuthParams, TOKEN_KEY } from '../Utils';
import { getUserSucess, fetchUser } from "../Actions/userActions";
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
            AuthParams.setToken(res.data.token, true);
            dispatch(SignInUserSuccess(res.data));
            dispatch(getUserSucess(res.data));
            dispatch(fetchUser());
        } catch(error) {
            const token = AuthParams.getToken();
            if (token) {
                AuthParams.remove(TOKEN_KEY)
            }
            dispatch(SignInUserFailure(error.response.data));
        }
    };
}

export function SignUpUser (data) {    
    console.log(data); 
}