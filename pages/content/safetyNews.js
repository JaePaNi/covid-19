import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import SafetyNewsComponent from '../../components/safetyNews/safetyNewsComponent';

import { safetyNewsAction } from "../../reducer/safetyNews/action";

const SafetyNews = () => {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.safetyNews.data);
    const getItemStatus = useSelector(state => state.safetyNews.status);

    useEffect(() => {
        dispatch(safetyNewsAction());
    }, []);

    return <SafetyNewsComponent data={getItem} status={getItemStatus} />
}

export default SafetyNews;