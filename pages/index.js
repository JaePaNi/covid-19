import React from 'react';

import { Tabs } from 'antd';

import BarLineComponent from '../components/insfection_status/barLineComponent';
import CollapseComponent from '../components/insfection_status/collapseComponent';

export default function Home() {

    return (
        <Tabs defaultActiveKey="1" size="large" style={{ padding: 20 }} tabBarGutter={200}>
            <Tabs.TabPane tab="표 차트" key="1">
                <CollapseComponent />
            </Tabs.TabPane>
            <Tabs.TabPane tab="바, 라인 차트" key="2">
                <BarLineComponent />
            </Tabs.TabPane>
        </Tabs>
    )
}