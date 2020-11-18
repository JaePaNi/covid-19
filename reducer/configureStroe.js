
import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from '../reducer';


const configureStore = () => {
    const enhancer = compose(composeWithDevTools(applyMiddleware(thunk)));
    const store = createStore(rootReducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore, { debug: true });

export default wrapper;