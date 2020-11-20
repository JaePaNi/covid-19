import {List} from 'antd';

const SafetyNewsComponent = (data) => {
    return (
        data.status === true &&
        <List itemLayout="vertical" style={{ width: 1200 }}>
            {data.data.body.items.item.map(e => (
                <List.Item>
                    <h1>{e.content._text}</h1>
                    <List.Item.Meta title="작성일" description={e.wrtDt._text} />
                    <List.Item.Meta title="국가명" description={e.countryName._text} />
                    <List.Item.Meta title="내용" description={e.content._text} />
                </List.Item>
            ))}
        </List>
    )
}

export default SafetyNewsComponent;