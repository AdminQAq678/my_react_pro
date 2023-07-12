import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Dropdown, Layout, Menu, theme } from 'antd';
import Login from './Login';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import homeStyles from './Home.module.css';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  path: '' | string,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
	path,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('login', 'login', '/login',  <PieChartOutlined />),
  getItem('Option 2', '2', '', <DesktopOutlined />),
  getItem('User', 'sub1', '', <UserOutlined />, [
    getItem('Tom', '3', '',),
    getItem('Bill', '4', '',),
    getItem('Alex', '5', '',),
  ]),
  getItem('Team', 'sub2','',  <TeamOutlined />, [getItem('Team 1', '6', ''), getItem('Team 2', '8', '')]),
  getItem('Files', '9', '', <FileOutlined />),
];

const dropDownItems: MenuProps['items'] = [
	{
	  key: '1',
	  label: (
		<a target="_blank" rel="noopener noreferrer" href="/logout">
		  注销登录
		</a>
	  ),
	},
	{
		key: '2',
		label: (
			<a target="_blank" rel="noopener noreferrer" href="/profile">
			用户信息
		  </a>
		),
	},
	{
		key: '3',
		label: (
			<a target="_blank" rel="noopener noreferrer" href="/resetPassword">
			修改密码
		  </a>
		),
	},
]

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState<string>('index');

  const PathMap: {[key: string]: JSX.Element} = {
    'login': <Login/>
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onSelect={(info)=>{ setSelectedKey(info.key)}} />
      </Sider>
      <Layout>
        <Header style={{ background: colorBgContainer }} >
			<div style={{float:'right'}}>
<Dropdown menu={{items: dropDownItems}}>
	<Avatar
  src={"https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=1200&quality=85&auto=format&fit=max&s=4219f64fafe19d101f92e0eba0181f6a"}
  icon={<AntDesignOutlined />}
  className={homeStyles.avatar}
/>


</Dropdown>
			</div>

		</Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

		  <div style={{background: colorBgContainer}}>
          {PathMap[selectedKey] || <div>No matched path</div>}
		  </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;