import { Tabs, List } from 'antd';

const AgeGenderComponent = (data) => {

    return (

        data.status === true &&
        <Tabs defaultActiveKey="0" size="large" tabBarGutter={70} centered={true} style={{ padding: '15px 0 0 30px' }}>
            {data.data.body.items.item.map((e, index) => (
                <Tabs.TabPane tab={e.gubun._text} key={index}>
                    <List itemLayout="horizontal">
                        <List.Item>
                            <List.Item.Meta title="확진자" description={e.confCase._text} />
                            <List.Item.Meta title="확진률" description={e.confCaseRate._text} />
                            <List.Item.Meta title="치명률" description={e.criticalRate._text} />
                            <List.Item.Meta title="사망자" description={e.death._text} />
                            <List.Item.Meta title="사망률" description={e.deathRate._text} />
                        </List.Item>
                    </List>
                </Tabs.TabPane>
            ))}
        </Tabs>
    )
}

export default AgeGenderComponent;