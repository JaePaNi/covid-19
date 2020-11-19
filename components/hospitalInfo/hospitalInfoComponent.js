import { Tabs, List } from 'antd';

const HospitalInfoComponent = (data) => {
    return (
        data.status === true &&
        <Tabs defaultActiveKey="0" size="large" tabBarGutter={170} centered={true} style={{ padding: '15px 0 0 30px' }}>
            <Tabs.TabPane tab="서울" key={0}>
                {data.data.body.items.item.map(e => (e.sidoNm._text === '서울' &&
                    <List itemLayout="horizontal">
                        <h2>{e.sgguNm._text}</h2>
                        <List.Item>
                            <List.Item.Meta title="기관명" description={e.yadmNm._text} />
                            <List.Item.Meta title="전화번호" description={e.telno._text} />
                            <List.Item.Meta title="운영가능일자" description={e.adtFrDd._text} />
                            <List.Item.Meta title="구분코드" description={e.spclAdmTyCd._text} />
                        </List.Item>
                        <br /><br /><br />
                    </List>
                ))}
            </Tabs.TabPane>

            <Tabs.TabPane tab="인천" key={1}>
                {data.data.body.items.item.map(e => (e.sidoNm._text === '인천' &&
                    <List itemLayout="horizontal">
                        <h2>{e.sgguNm._text}</h2>
                        <List.Item>
                            <List.Item.Meta title="기관명" description={e.yadmNm._text} />
                            <List.Item.Meta title="전화번호" description={e.telno._text} />
                            <List.Item.Meta title="운영가능일자" description={e.adtFrDd._text} />
                            <List.Item.Meta title="구분코드" description={e.spclAdmTyCd._text} />
                        </List.Item>
                        <br /><br /><br />
                    </List>
                ))}
            </Tabs.TabPane>
            <Tabs.TabPane tab="경기" key={2}>
                {data.data.body.items.item.map(e => (e.sidoNm._text === '경기' &&
                    <List itemLayout="horizontal">
                        <h2>{e.sgguNm._text}</h2>
                        <List.Item>
                            <List.Item.Meta title="기관명" description={e.yadmNm._text} />
                            <List.Item.Meta title="전화번호" description={e.telno._text} />
                            <List.Item.Meta title="운영가능일자" description={e.adtFrDd._text} />
                            <List.Item.Meta title="구분코드" description={e.spclAdmTyCd._text} />
                        </List.Item>
                        <br /><br /><br />
                    </List>
                ))}
            </Tabs.TabPane>

            <Tabs.TabPane tab="부산" key={3}>
                {data.data.body.items.item.map(e => (e.sidoNm._text === '부산' &&
                    <List itemLayout="horizontal">
                        <h2>{e.sgguNm._text}</h2>
                        <List.Item>
                            <List.Item.Meta title="기관명" description={e.yadmNm._text} />
                            <List.Item.Meta title="전화번호" description={e.telno._text} />
                            <List.Item.Meta title="운영가능일자" description={e.adtFrDd._text} />
                            <List.Item.Meta title="구분코드" description={e.spclAdmTyCd._text} />
                        </List.Item>
                        <br /><br /><br />
                    </List>
                ))}
            </Tabs.TabPane>

            <Tabs.TabPane tab="경남" key={4}>
                {data.data.body.items.item.map(e => (e.sidoNm._text === '경남' &&
                    <List itemLayout="horizontal">
                        <h2>{e.sgguNm._text}</h2>
                        <List.Item>
                            <List.Item.Meta title="기관명" description={e.yadmNm._text} />
                            <List.Item.Meta title="전화번호" description={e.telno._text} />
                            <List.Item.Meta title="운영가능일자" description={e.adtFrDd._text} />
                            <List.Item.Meta title="구분코드" description={e.spclAdmTyCd._text} />
                        </List.Item>
                        <br /><br /><br />
                    </List>
                ))}
            </Tabs.TabPane>

            <Tabs.TabPane tab="강원" key={5}>
                {data.data.body.items.item.map(e => (e.sidoNm._text === '강원' &&
                    <List itemLayout="horizontal">
                        <h2>{e.sgguNm._text}</h2>
                        <List.Item>
                            <List.Item.Meta title="기관명" description={e.yadmNm._text} />
                            <List.Item.Meta title="전화번호" description={e.telno._text} />
                            <List.Item.Meta title="운영가능일자" description={e.adtFrDd._text} />
                            <List.Item.Meta title="구분코드" description={e.spclAdmTyCd._text} />
                        </List.Item>
                        <br /><br /><br />
                    </List>
                ))}
            </Tabs.TabPane>

        </Tabs>
    )
}

export default HospitalInfoComponent;