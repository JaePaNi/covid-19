import React, { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { regionActionToday } from "../../reducer/region/action";

import RegionComponent from '../../components/region/regionComponent';

const Region = () => {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.region.data);
    const getItemStatus = useSelector(state => state.region.status);

    useEffect(() => {
        dispatch(regionActionToday());
    }, []);

    return <RegionComponent data={getItem} status={getItemStatus} />
}

export default Region;