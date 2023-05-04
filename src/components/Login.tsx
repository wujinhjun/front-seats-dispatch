import React, { useState, useContext } from "react";
import axios from "axios";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import MyContext from "./MyContext";

import "./Login.css";

function Login() {
  const { url: preUrl } = useContext(MyContext);
  const url = `${preUrl}/login`;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(url);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(url, {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      console.log(response.data.message);
      window.location.href = "/seats";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <span className="Login-title">后台管理系统</span>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handleSubmit}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default Login;
