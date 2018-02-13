import axios from 'axios';
import {
    SIGN_IN_USER_REQUEST,
    SIGN_IN_USER_FAILURE,
    SIGN_IN_USER_SUCCESS
} from '../Constants/index';
import { API_URL } from '../config';


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
        payload: errors
    }
}

// User Sign In Action Event dispatch async Action

export function SignInUser(credentials) {
    return  async (dispatch) => {
        dispatch(SignInUserRequest(credentials));
        try {
            const res = await axios.post(`${API_URL}/login_check`, credentials);
            dispatch(SignInUserSuccess(res.data))
        } catch(error) {
            dispatch(SignInUserFailure(error.response));
        }
    };
}

export function SignUpUser (data) {
    console.log('data',data);
}