import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from './reducers';
import './index.css';

let appData = localStorage.getItem("appData");
let initialState = JSON.parse(appData);

const store = (initialState != null)
    ? createStore(reducer, initialState)
    : createStore(reducer);

store.subscribe(() => {
    let appData = JSON.stringify(store.getState());
    localStorage.setItem("appData", appData);
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
