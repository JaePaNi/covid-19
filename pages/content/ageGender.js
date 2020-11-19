import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { ageGenderTodayAction } from "../../reducer/ageGender/action";

import AgeGenderComponent from '../../components/ageGender/ageGenderComponent';

const AgeGender = () => {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.ageGender.data);
    const getItemStatus = useSelector(state => state.ageGender.status);

    useEffect(() => {
        dispatch(ageGenderTodayAction());
    }, []);

    return <AgeGenderComponent data={getItem} status={getItemStatus} />
}

export default AgeGender;