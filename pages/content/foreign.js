import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { foreignTodayAction } from "../../reducer/foreign/action";

import ForeignComponent from '../../components/foreign/foreignComponent';

const Foreign = () => {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.foreign.data);
    const getItemStatus = useSelector(state => state.foreign.status);

    useEffect(() => {
        dispatch(foreignTodayAction());
    }, []);

    return <ForeignComponent data={getItem} status={getItemStatus} />
}

export default Foreign;