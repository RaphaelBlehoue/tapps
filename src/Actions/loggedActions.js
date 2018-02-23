import { AUTH_CHECK_REQUEST, AUTH_CHECK_SUCCESS, AUTH_CHECK_FAILURE } from '../Constants/index';
import { AuthParams, TOKEN_KEY } from '../Utils';
import api from "../config";

 export function AuthCheckRequest() {
     return {
         type: AUTH_CHECK_REQUEST
     }
 }

 export function AuthCheckSucess() {
     return {
         type: AUTH_CHECK_SUCCESS
     }
 }

 export function AuthCheckFailure() {
     return {
         type: AUTH_CHECK_FAILURE
     }
}

// Verifie if Current User is logged Or is false Logout
export function AuthCheck(){
    return async(dispatch) => {
        dispatch(AuthCheckRequest());
        try {
            await api.logged.getLogged();
            dispatch(AuthCheckSucess());
        } catch(error){
            const token = AuthParams.getToken();
			if (token) {
				AuthParams.remove(TOKEN_KEY);
			}
            dispatch(AuthCheckFailure());
        }
    }
}