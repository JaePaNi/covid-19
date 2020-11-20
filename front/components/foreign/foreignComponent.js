import {Collapse, List} from 'antd';

const ForeignComponent = (data) => {

    return (
        <Collapse style={{width: 1200}} bordered={false}>
            {
                data.status === true &&
                data.data.body.items.item.map((e, index) => (
                    <Collapse.Panel style={{padding: '10px 0 20px 0'}}
                                    header={`${e.areaNm._text} :: ${e.nationNm._text}`} key={index}>
                        <List itemLayout="horizontal">
                            <List.Item>
                                <List.Item.Meta title="국가별 사망자 수" description={e.natDeathCnt._text}/>
                                <List.Item.Meta title="확진률 대비 사망률" description={e.natDeathRate._text}/>
                                <List.Item.Meta title="국가별 확진자 수" description={e.natDefCnt._text}/>
                                <List.Item.Meta title="기준일시" description={e.stdDay._text}/>
                            </List.Item>
                        </List>
                    </Collapse.Panel>
                ))
            }
        </Collapse>
    )
}

export default ForeignComponent;