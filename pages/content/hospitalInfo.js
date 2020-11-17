import React, {useCallback} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {hospitalInfoAction} from "../../reducer/hospitalInfo/action";

const HospitalInfo = () => {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.hospitalInfo.data);
    const getItemStatus = useSelector(state => state.hospitalInfo.status);

    const onClickBtn = useCallback(() => {
        console.log('dispatch click');
        dispatch(hospitalInfoAction());
    }, []);

    return (
        <div>
            <button onClick={onClickBtn}>HospitalInfo</button>
            {
                getItemStatus !== false ?
                    <div>{getItem.body.items.item.map((e, index) => (
                        <div>
                            <spap key={index}>{e.yadmNm._text}</spap>
                            <span>  :::::::::::::::::::   </span>
                            <span>{e.sidoNm._text}</span>
                        </div>
                    ))}</div> : <p>getItemStatus is null</p>
            }
        </div>
    )
}

export default HospitalInfo;