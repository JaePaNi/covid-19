import Headers from '../common/Headers';
import SiderContent from '../common/SiderContent';

// import reducer from '../reducer';
// import withRedux from 'next-redux-wrapper';
// import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

import wrapper from '../reducer/configureStroe';

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

export default wrapper.withRedux(MyApp);
/* 
    withRedux는 예전방식이라 wrapper 방식으로 변경

    주의!!
    각 세부 페이지의 getInitialProps, getServerSideProps와의 결합필요 -> https://darrengwon.tistory.com/557
*/

// export default withRedux((initialState, options) => {
//     const middlewares = [thunk];
//     const enhancer = compose(
//         applyMiddleware(...middlewares),
//         typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
//     );
//     const store = createStore(reducer, initialState, enhancer);
//     return store;
// })(MyApp);