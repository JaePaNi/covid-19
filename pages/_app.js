import Headers from '../components/Headers';
import SiderContent from '../components/SiderContent';


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