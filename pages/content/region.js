import React, {useCallback} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {regionAction} from "../../reducer/region/action";

const Region = () => {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.region.data);
    const getItemStatus = useSelector(state => state.region.status);

    const onClickBtn = useCallback(() => {
        console.log('dispatch click');
        dispatch(regionAction());
    }, []);

    return (
        <div>
            <button onClick={onClickBtn}>Region</button>
            {
                getItemStatus !== false ?
                    <div>{getItem.body.items.item.map((e, index) => (
                        <p key={index}>{e.gubun._text}</p>
                    ))}</div> : <p>getItemStatus is null</p>
            }
        </div>
    )
}

export default Region;