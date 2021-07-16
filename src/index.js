import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import catsReducer from "./features/cats/catsSlice";

import App from "./App";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(catsReducer, composedEnhancer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById("root")
);
