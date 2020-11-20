import React, { useState, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { infctionStatusAction, infctionStatusOneAction } from '../../reducer/insfection_status/action';

import { Switch } from 'antd';

import NccBar from "./bar/nccBar";
import NccLine from "./line/nccLine";
import CareBar from './bar/careBar';
import CareLine from "./line/careLine";
import DeathBar from './bar/deathBar';
import DeathLine from "./line/deathLine";
import AccExamBar from './bar/accExamBar';
import AccExamLine from './line/accExamLine';
import ResultNegBar from './bar/resultNegBar';
import ResultNegLine from "./line/resultNegLine";

const BarLineComponent = () => {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.insfectionStatus.data);
    const getItemOne = useSelector(state => state.insfectionStatus.dataOne);
    const getItemStatus = useSelector(state => state.insfectionStatus.status);

    const [data, setData] = useState([]);
    const [chartSelect, setChartSelect] = useState(true);

    useEffect(() => {
        dispatch(infctionStatusAction());
        dispatch(infctionStatusOneAction());
    }, []);

    useEffect(() => {
        getItemStatus === true &&
            setData([getItem.body.items.item.map((e, index) => ({
                date: e.stateDt._text,
                일일_확진자_수: index !== getItem.body.items.item.length - 1
                    ? e.decideCnt._text - getItem.body.items.item[index + 1].decideCnt._text
                    : e.decideCnt._text - getItemOne.body.items.item.decideCnt._text,

                일일_검사자_수: index !== getItem.body.items.item.length - 1
                    ? e.accExamCnt._text - getItem.body.items.item[index + 1].accExamCnt._text
                    : e.accExamCnt._text - getItemOne.body.items.item.accExamCnt._text,

                일일_사망자_수: index !== getItem.body.items.item.length - 1
                    ? e.deathCnt._text - getItem.body.items.item[index + 1].deathCnt._text
                    : e.deathCnt._text - getItemOne.body.items.item.deathCnt._text,

                일일_결과음성_수: index !== getItem.body.items.item.length - 1
                    ? e.resutlNegCnt._text - getItem.body.items.item[index + 1].resutlNegCnt._text
                    : e.resutlNegCnt._text - getItemOne.body.items.item.resutlNegCnt._text,

                일일_격리해제_수: index !== getItem.body.items.item.length - 1
                    ? e.clearCnt._text - getItem.body.items.item[index + 1].clearCnt._text
                    : e.clearCnt._text - getItemOne.body.items.item.clearCnt._text,

                격리해제_수: e.clearCnt._text,
                치료환자_수: e.careCnt._text

                // 치료환자_수: index !== getItem.body.items.item.length - 1
                //     ? e.careCnt._text - getItem.body.items.item[index + 1].careCnt._text
                //     : e.careCnt._text - getItemOne.body.items.item.careCnt._text
            })
            )]);
    }, [getItem]);

    const onChangeLineBar = useCallback((e) => {
        setChartSelect(e);
    }, []);

    return (
        <>
            <div style={{ margin: '10px 0 20px 0' }}>
                <span style={{ marginRight: 10 }}>라인차트</span>
                <Switch defaultChecked onChange={onChangeLineBar} />
                <span style={{ marginLeft: 10 }}>바차트</span>
            </div>
            <div style={{ margin: '20px 0 70px 0' }}>
                <h1>일일확진자 수</h1>
                {
                    chartSelect === true ? <NccBar data={data} getItemStatus={getItemStatus} /> :
                        <NccLine data={data} getItemStatus={getItemStatus} />
                }
            </div>
            <div style={{ margin: '20px 0 70px 0' }}>
                <h1>검사자 수</h1>
                {
                    chartSelect === true ? <AccExamBar data={data} getItemStatus={getItemStatus} /> :
                        <AccExamLine data={data} getItemStatus={getItemStatus} />
                }
            </div>
            <div style={{ margin: '20px 0 70px 0' }}>
                <h1>결과 음성 수</h1>
                {
                    chartSelect === true ? <ResultNegBar data={data} getItemStatus={getItemStatus} /> :
                        <ResultNegLine data={data} getItemStatus={getItemStatus} />
                }
            </div>
            <div style={{ margin: '20px 0 70px 0' }}>
                <h1>치료중인 환자 수</h1>
                {
                    chartSelect === true ? <CareBar data={data} getItemStatus={getItemStatus} /> :
                        <CareLine data={data} getItemStatus={getItemStatus} />
                }
            </div>

            <div style={{ margin: '20px 0 70px 0' }}>
                <h1>사망자 수</h1>
                {
                    chartSelect === true ? <DeathBar data={data} getItemStatus={getItemStatus} /> :
                        <DeathLine data={data} getItemStatus={getItemStatus} />
                }
            </div>
        </>
    )
}

export default BarLineComponent;