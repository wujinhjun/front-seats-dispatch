import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="seats">
          <Link to="/seats">座位</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">登录</Link>
        </Menu.Item>
        <Menu.Item key="dispatch">
          <Link to="/display">分发</Link>
        </Menu.Item>
        <Menu.Item key="verify">
          <Link to="/verify">核验</Link>
        </Menu.Item>
        <Menu.Item key="setting">
          <Link to="/setting">设置</Link>
        </Menu.Item>
      </Menu>
      <div>这里什么也没有呀 喵</div>
    </>
  );
}
