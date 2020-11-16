import React, {useCallback} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {infctionStatus} from '../reducer/insfection_status/action';

export default function Home() {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.insfectionStatus.data);
    const getItemStatus = useSelector(state => state.insfectionStatus.status);

    const onClickBtn = useCallback(() => {
        console.log('dispatch click');
        dispatch(infctionStatus());
    }, []);

    return (
        <div>
            <button onClick={onClickBtn}>index</button>
            {
                getItemStatus !== false ?
                    <div>{getItem.body.items.item.map((e, index) => (
                        <p key={index}>{e.accDefRate._text}</p>
                    ))}</div> : <p>getItemStatus is null</p>
            }
        </div>
    )
}