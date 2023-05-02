import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducter from "./redux/reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducter,
    initialState,

    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;