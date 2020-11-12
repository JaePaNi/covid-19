import Link from 'next/link';

import { Row, Col, Layout } from 'antd'
const { Sider } = Layout;

const SiderContent = () => {
    return (
        <Sider collapsible='true' collapsedWidth={50} width={300} theme='light'>
            <Row align='middle' justify='center'>
                <Col span={24} style={{ padding: '20px 0 20px 10px', fontSize: '1.1rem' }}>
                    <Link href='/'><a>코로나19 감염 현황</a></Link>
                </Col>
                <Col span={24} style={{ padding: '20px 0 20px 10px', fontSize: '1.1rem' }}>
                    <Link href='/content/region'><a>코로나19 시▫도 발생 현황</a></Link>
                </Col>
                <Col span={24} style={{ padding: '20px 0 20px 10px', fontSize: '1.1rem' }}>
                    <Link href='/content/ageGender'><a>코로나19 연령별▫성별감염 현황</a></Link>
                </Col>
                <Col span={24} style={{ padding: '20px 0 20px 10px', fontSize: '1.1rem' }}>
                    <Link href='/content/foreign'><a>코로나19 해외발생 현황</a></Link>
                </Col>
                <Col span={24} style={{ padding: '20px 0 20px 10px', fontSize: '1.1rem' }}>
                    <Link href='/content/hospitalInfo'><a>코로나19 병원정보</a></Link>
                </Col>
                <Col span={24} style={{ padding: '20px 0 20px 10px', fontSize: '1.1rem' }}>
                    <Link href='/content/safetyNews'><a>국가▫지역별 코로나관련 안전소식</a></Link>
                </Col>
            </Row>
        </Sider>
    );
}

export default SiderContent;