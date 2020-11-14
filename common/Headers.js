import Head from 'next/head';

import { Row, Col, Typography, Layout } from 'antd';

const { Header } = Layout;

const Headers = () => {
    return (
        <>
            <Head>
                <title>Covid-19</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="http://d3js.org/d3.v3.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.8.2/antd.compact.min.css" integrity="sha512-ev9smTF1ji67qHgyw23Gs1JR92HY7Ivc0qZW6yAK6t7kMkQkOKq61SYC76Ze5/ltQQ7mhBXCJzx9c9hMLoNTyA==" crossorigin="anonymous" />
            </Head>
            {/* <Row align="middle" justify="center">
                <Col span={24} style={{ backgroundColor: 'lavender', height: '5rem' }}>
                    <Typography.Title level={3}>COVID19</Typography.Title>
                </Col>
            </Row> */}
            <Header style={{ backgroundColor: '#212121', display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* <Typography.Title level={1}>COVID19</Typography.Title> */}
                <h1 style={{ color: 'white' }}>COVID-19 KOREA</h1>
            </Header>
        </>
    )
}

export default Headers;