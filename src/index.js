import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './Stores/ConfigureStore';
import App from "./App";
import registerServiceWorker from './registerServiceWorker';
import { AuthCheck } from './Actions/loggedActions';


const store = configureStore();


store.dispatch(AuthCheck());


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
