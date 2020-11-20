// import React, { useEffect } from 'react';
//
// import { useDispatch, useSelector } from "react-redux";
// import SafetyNewsComponent from '../../components/safetyNews/safetyNewsComponent';
//
// import { safetyNewsAction } from "../../reducer/safetyNews/action";

const SafetyNews = ({ result }) => {
    // const dispatch = useDispatch();
    //
    // const getItem = useSelector(state => state.safetyNews.data);
    // const getItemStatus = useSelector(state => state.safetyNews.status);
    //
    // useEffect(() => {
    //     dispatch(safetyNewsAction());
    // }, []);
    //
    // return <SafetyNewsComponent data={getItem} status={getItemStatus} />

    // return <div>{esult.respronse.body.items.item.map(e => <p>{e.content._text}</p>)} hi</div>
    return <div>{console.log(result)} hi</div>
}

// export async function getServerSideProps(context) {
//     console.log('context ::: ', Object.keys(context));
//     const res = await fetch('http://localhost:5000/openapi/HOST_SAFETY_NEWS');
//     const data = await res.json();

//     // console.log('getStaticProps res ::: ', res);
//     // console.log('getStaticProps posts ::: ', data);

//     return {
//         props: {
//             data,
//         }
//     }
// }

export async function getStaticProps(context) {
    console.log('context ::: ', Object.keys(context));
    const res = await fetch('http://localhost:5000/openapi/HOST_SAFETY_NEWS');
    const data = await res.json();

    const result = JSON.parse(data);
    console.log(result.response.body.items.item.map(e => e))

    return {
        props: {
            result,
        }
    }
}

export default SafetyNews;