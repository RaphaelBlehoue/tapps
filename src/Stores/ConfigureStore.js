import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../Reducers';



const history = createHistory();
const composeEnhancers = composeWithDevTools({
	shouldHotReload: true
});

const middleware = composeEnhancers(applyMiddleware(promise(), routerMiddleware(history), logger, thunk));


function configureStore (initialState = {}) {
    const store = createStore(rootReducer, initialState, middleware);
    return store;
}

export { history, configureStore };