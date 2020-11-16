import React, {useCallback} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {foreign} from "../../reducer/foreign/action";

const Foreign = () => {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.foreign.data);
    const getItemStatus = useSelector(state => state.foreign.status);

    const onClickBtn = useCallback(() => {
        console.log('dispatch click');
        dispatch(foreign());
    }, []);

    return (
        <div>
            <button onClick={onClickBtn}>Foreign</button>
            {
                getItemStatus !== false ?
                    <div>{getItem.body.items.item.map((e, index) => (
                        <p key={index}>{e.areaNm._text}</p>
                    ))}</div> : <p>getItemStatus is null</p>
            }
        </div>
    )
}

export default Foreign;