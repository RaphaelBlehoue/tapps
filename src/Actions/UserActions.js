import axios from 'axios';
import {
    SIGN_IN_USER_REQUEST,
    SIGN_IN_USER_FAILURE,
    SIGN_IN_USER_SUCCESS
} from '../Constants/User';

//const ROOT_URL = (window.location.hostname === "localhost") ? "https://smart-api.dev/api" : "https://jsonplaceholder.typicode.com";
const ROOT_URL = "/api/auth";

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
export function SignInUserFailure(dataError) {
    return {
        type: SIGN_IN_USER_FAILURE,
        dataError
    }
}

// User Sign In Action Event dispatch async Action
export function SignInUser(credentials) {
    return dispatch => {
        dispatch(SignInUserRequest(credentials));
        return axios.post(`${ROOT_URL}/users/login`, credentials)
            .then(response =>{
                dispatch(SignInUserSuccess(response.data));
            }).catch(error => {
                dispatch(SignInUserFailure(error.response));
            });
    }
}

export function SignUpUser (data) {
    console.log(data);
}