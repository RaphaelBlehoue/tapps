import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
// import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../Reducers';



export const history = createHistory();
const middleware = composeWithDevTools(applyMiddleware(promise(), routerMiddleware(history), thunk));


export function configureStore (initialState = {}) {
    const store = createStore(rootReducer, initialState, middleware);
    return store;
}