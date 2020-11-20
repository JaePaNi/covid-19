import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { infctionStatusAction, infctionStatusOneAction } from '../../reducer/insfection_status/action';
import { Collapse, List } from 'antd';

const CollapseComponent = ({ posts }) => {
    const dispatch = useDispatch();

    const getItem = useSelector(state => state.insfectionStatus.data);
    const getItemStatus = useSelector(state => state.insfectionStatus.status);

    useEffect(() => {
        dispatch(infctionStatusAction());
        dispatch(infctionStatusOneAction());
    }, []);

    useEffect(() => {
        console.log('posts ::: ', posts);
    }, [posts]);

    return (
        <Collapse style={{ width: 1200 }} bordered={false} ghost="true" defaultActiveKey="0">
            {
                getItemStatus === true &&
                getItem.body.items.item.map((e, index) => (
                    <Collapse.Panel style={{ padding: '10px 0 20px 0' }} header={`기준일시 :: ${e.stateDt._text}`}
                        key={index}>
                        <List itemLayout="horizontal">
                            <List.Item>
                                <List.Item.Meta title="확진자" description={e.decideCnt._text} />
                                <List.Item.Meta title="격리해제" description={e.clearCnt._text} />
                                <List.Item.Meta title="사망자" description={e.deathCnt._text} />
                                <List.Item.Meta title="검사진행" description={e.examCnt._text} />
                                <List.Item.Meta title="치료중" description={e.careCnt._text} />
                                <List.Item.Meta title="누적확진률" description={e.accDefRate._text} />
                            </List.Item>
                        </List>
                    </Collapse.Panel>
                ))
            }
        </Collapse>
    )
}

export default CollapseComponent;