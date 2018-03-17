import { SubmissionError } from 'redux-form';
import { history } from '../Stores/ConfigureStore';
import {
    SIGN_IN_USER,
    SIGN_IN_USER_FAILURE,
    SIGN_IN_USER_SUCCESS,
    SIGN_UP_USER,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAILURE
} from '../Constants/AuthTypes';
import { AuthParams, TOKEN_KEY } from '../Utils';
import { getUserSucess } from "../Actions/userActions";
import api from '../config';



export function SignInUser(formValues) {
    return {
        type: SIGN_IN_USER,
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

export function SignUpUser(formValues) {
    return {
        type: SIGN_UP_USER,
        formValues
    }
}

export function SignUpUserSuccess(data) {
    return {
        type: SIGN_UP_USER_SUCCESS,
        data
    }
}

export function SignUpUserFailure(errors) {
    return {
        type: SIGN_UP_USER_FAILURE,
        errors
    }
}


// User Sign In Action Event dispatch async Action

export function SignIn(credentials) {
    return async (dispatch) => {
        dispatch(SignInUser(credentials));
        try {
            const res = await api.auth.login(credentials);
            AuthParams.setToken(res.data.token, true);
            dispatch(SignInUserSuccess(res.data));
            dispatch(getUserSucess(res.data));
            history.replace("/app/feed");
        } catch(error) {
            dispatch(SignInUserFailure(error.response.data));
            const token = AuthParams.getToken();
            if (token) AuthParams.remove(TOKEN_KEY)
        }
    }
}


export function SignUp(data) {
    return async (dispatch) => {
        dispatch(SignUpUser(data));
        try {
            const res = await api.user.register(data);
            dispatch(SignUpUserSuccess(res.data));
        } catch(error) {
            if (error.response.data && error.response.data.errors) {
              dispatch(SignUpUserFailure(error.response.data));
              const errors = error.response.data.errors;
              throw new SubmissionError(Object.assign({}, ...errors));
            }
        }
    };
}



/* export default reduxForm({
  form: 'login',
  onChange: (values, dispatch, props) => {
    if (props.error) dispatch(clearSubmitErrors('login'));
  }
}) */
