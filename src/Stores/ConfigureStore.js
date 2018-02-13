import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../Reducers';

const middleware = composeWithDevTools(applyMiddleware(promise(), logger, thunk));
const configureStore = createStore(rootReducer, middleware);

export default configureStore;