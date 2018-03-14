import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import { routerReducer as router } from 'react-router-redux';
import auth from './auth';
import user from './user';
import sign from './sign';

const rootReducer = combineReducers({
	auth,
	user,
	sign,
	form,
	router
});

export default rootReducer;
