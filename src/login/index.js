import "./index.css";
import { Avatar, Form, message, Input, Checkbox, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/constants";

function LoginPage() {
  const history = useHistory;
  const onSubmit = (values) => {
    axios
      .post(`${API_URL}/login`, {
        userId: values.userId,
        userPassword: values.userPassword,
      })
      .then((result) => {
        console.log(result);
        message.success("환영합니다.");
      });
  };
  return (
    <div id="login-container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="on"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
