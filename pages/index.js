import React, {useCallback} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {onClick} from '../reducer/insfection_status/action';

export default function Home() {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.test.data);
    const getItemStatus = useSelector(state => state.test.status);

    const onClickBtn = useCallback(() => {
        console.log('dispatch click');
        dispatch(onClick());
    }, []);

    return (
        <div>
            <button onClick={onClickBtn}>index</button>
            {
                getItemStatus !== false ?
                    <div>{getItem.body.items.item.map(e => (
                        <p>{e.accDefRate._text}</p>
                    ))}</div> : <p>getItemStatus is null</p>
            }
        </div>
    )
}