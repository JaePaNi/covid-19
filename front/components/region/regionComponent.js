import { Collapse, List } from 'antd';

const RegionComponent = (data) => {

    return (
        <Collapse style={{ width: 1200 }} bordered={false}>
            {
                data.status === true &&
                data.data.body.items.item.map((e, index) => (
                    <Collapse.Panel style={{ padding: '10px 0 20px 0' }} header={`${e.gubun._text} :: ${e.gubunEn._text}`} key={index}>
                        <List itemLayout="horizontal">
                            <List.Item>
                                <List.Item.Meta title="확진자 수" description={e.defCnt._text} />
                                <List.Item.Meta title="전일대비 증감 수" description={e.incDec._text} />
                                <List.Item.Meta title="격리해제 수" description={e.isolClearCnt._text} />
                                <List.Item.Meta title="격리중 환자 수" description={e.isolIngCnt._text} />
                                <List.Item.Meta title="지역발생 수" description={e.localOccCnt._text} />
                                <List.Item.Meta title="해외유입 수" description={e.overFlowCnt._text} />
                                <List.Item.Meta title="10만명당 발생 수" description={e.qurRate._text} />
                                <List.Item.Meta title="기준일시" description={e.stdDay._text} />
                            </List.Item>
                        </List>
                    </Collapse.Panel>
                ))
            }
        </Collapse>
    )
}

export default RegionComponent;