import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
import reducer from "./reducers";
import "./index.css";

const store = createStore(reducer, getInitialState());

store.subscribe(() => {
    writeState(store.getState().present);
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

function getInitialState() {
    let appData = localStorage.getItem("appData");

    if (appData != null) {
        return {
            "past": [],
            "present": JSON.parse(appData),
            "future": []
        };
    } else {
        return {
            "past": [],
            "present": undefined,
            "future": []
        };
    }
}

function writeState(state) {
    localStorage.setItem("appData", JSON.stringify(state));
}
