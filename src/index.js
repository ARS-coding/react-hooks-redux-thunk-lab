import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import catsReducer from "./features/cats/catsSlice";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(catsReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById("root")
);
