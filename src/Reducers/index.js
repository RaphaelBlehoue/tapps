import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import { routerReducer as router } from 'react-router-redux';
import auth from './auth';
import logged from './logged';

const rootReducer = combineReducers({
	auth,
	logged,
	form,
	router
});

export default rootReducer;