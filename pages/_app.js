import Headers from '../common/Headers';
import SiderContent from '../common/SiderContent';

import reducer from '../reducer';
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Layout } from 'antd';

const MyApp = ({ Component }) => {
    return (
        <>
            <Headers />
            <Layout>
                <Layout style={{ backgroundColor: '#ffffff' }}>
                    <SiderContent />
                    <Component />
                </Layout>
            </Layout>
        </>
    )
}

// export default wrapper.withRedux(MyApp);
export default withRedux((initialState, options) => {
    const middlewares = [thunk];
    const enhancer = compose(
        applyMiddleware(...middlewares),
        typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
    const store = createStore(reducer, initialState, enhancer);
    return store;
})(MyApp);