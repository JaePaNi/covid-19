import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { hospitalInfoAction } from "../../reducer/hospitalInfo/action";

import HospitalInfoComponent from '../../components/hospitalInfo/hospitalInfoComponent';

const HospitalInfo = () => {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.hospitalInfo.data);
    const getItemStatus = useSelector(state => state.hospitalInfo.status);

    useEffect(() => {
        dispatch(hospitalInfoAction());
    }, []);

    return <HospitalInfoComponent data={getItem} status={getItemStatus} />
}

export default HospitalInfo;