import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
import { FaBeer } from 'react-icons/fa';

const Analytics = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
      style={{backgroundColor:"white",color:"black"}}
        breakpoint="lg"
        collapsedWidth="0"
        width={130}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
           theme="dark"
           mode="inline"
           style={{backgroundColor:"white",color:"black"}}
           defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1" icon={<FaBeer/>}>
            <Link to="/analytics">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FaBeer/>}>
            <Link to="/createinjury">Videos</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FaBeer/>}>
            <Link to="/injurylist">Profile</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
           lorem10
          </div>
        </Content>
       
      </Layout>
    </Layout>
  );
};
export default Analytics;