import { List } from 'antd';

const SafetyNews = ({ result }) => {
    return (
        <List itemLayout="vertical" style={{ width: 1200 }}>
            {result.response.body.items.item.map(e => (
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

export async function getServerSideProps() {
    const res = await fetch('http://localhost:5000/openapi/HOST_SAFETY_NEWS');
    const data = await res.json();
    const result = JSON.parse(data);

    return { props: { result } }
}

export default SafetyNews;