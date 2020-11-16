import React, {useCallback} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {ageGender} from "../../reducer/ageGender/action";

const AgeGender = () => {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.ageGender.data);
    const getItemStatus = useSelector(state => state.ageGender.status);

    const onClickBtn = useCallback(() => {
        console.log('dispatch click');
        dispatch(ageGender());
    }, []);

    return (
        <div>
            <button onClick={onClickBtn}>ageGender</button>
            {
                getItemStatus !== false ?
                    <div>{getItem.body.items.item.map((e, index) => (
                        <p key={index}>{e.confCase._text}</p>
                    ))}</div> : <p>getItemStatus is null</p>
            }
        </div>
    )
}

export default AgeGender;