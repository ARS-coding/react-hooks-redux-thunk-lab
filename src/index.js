import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import catsReducer from "./features/cats/catsSlice";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(catsReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById("root")
);
