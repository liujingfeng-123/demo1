import React, { Suspense } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import routers from "../router";
import type { MenuProps } from "antd";
import { Layout, Menu, Skeleton } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  PayCircleOutlined,
} from "@ant-design/icons";
const { Header, Content, Sider } = Layout;
import "./index.less";

const items2: MenuProps["items"] = [
  {
    key: "/login",
    icon: <UserOutlined />,
    label: "LOGIN",
  },
  {
    key: "/home",
    icon: <LaptopOutlined />,
    label: "HOME",
  },
  {
    key: "sub3",
    icon: <NotificationOutlined />,
    label: "导航3",
  },
  {
    key: "sub4",
    icon: <PayCircleOutlined />,
    label: "导航4",
  },
];
const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = React.useState(pathname);
  const onChange = (info: { key: string }) => {
    setActiveKey(info.key);
    navigate(info.key);
  };
  console.log(activeKey, "activeKey");

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo">DEMO</div>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            selectedKeys={[activeKey]}
            style={{ height: "100%", borderRight: 0 }}
            onSelect={onChange}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Suspense fallback={<Skeleton />}>{useRoutes(routers)}</Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
