import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE } from '../Constants/UserType';
import { AuthParams, TOKEN_KEY } from '../Utils';
import api from "../config";


export function getUser() {
    return {
      type: GET_USER
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
    dispatch(getUser());
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
