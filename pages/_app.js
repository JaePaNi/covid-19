import Headers from '../common/Headers';
import SiderContent from '../common/SiderContent';


import { Layout } from 'antd';

const MyApp = ({ Component }) => {
  return (
    <>
      <Headers />
      <Layout>
        <Layout>
          <SiderContent />
          <Component />
        </Layout>
      </Layout>
    </>
  )
}

export default MyApp