import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from '../Constants';
import { AuthParams, TOKEN_KEY } from '../Utils';
import api from "../config";

 export function getUserRequest() {
     return {
         type: GET_USER_REQUEST
     }
 }

 export function getUserSucess(data) {
     return {
         type: GET_USER_SUCCESS,
         data
     }
 }

 export function getUserFailure() {
     return {
         type: GET_USER_FAILURE
     }
}

// Verifie if Current User is logged Or is false Logout
export function fetchUser(){
    return async(dispatch) => {
        dispatch(getUserRequest());
        try {
            const res = await api.user.fetch();
            dispatch(getUserSucess(res.data));
        } catch(error){
            dispatch(getUserFailure());
            const token = AuthParams.getToken();
			if (token) AuthParams.remove(TOKEN_KEY);            
        }
    }
}