import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import  configureStore from './Stores/ConfigureStore';
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

const store = configureStore;

render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
