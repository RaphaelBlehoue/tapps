import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import usersReducer from './UsersReducer';

const rootReducer = combineReducers({
    Users: usersReducer,
    form: formReducer
});

export default rootReducer;