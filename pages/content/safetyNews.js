import React, {useCallback} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {safetyNewsAction} from "../../reducer/safetyNews/action";

const SafetyNews = () => {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.safetyNews.data);
    const getItemStatus = useSelector(state => state.safetyNews.status);

    const onClickBtn = useCallback(() => {
        console.log('dispatch click');
        dispatch(safetyNewsAction());
    }, []);

    return (
        <div>
            <button onClick={onClickBtn}>SafetyNews</button>
            {
                getItemStatus !== false ?
                    <div>{getItem.body.items.item.map((e, index) => (
                        <p key={index}>{e.title._text}</p>
                    ))}</div> : <p>getItemStatus is null</p>
            }
        </div>
    )
}

export default SafetyNews;