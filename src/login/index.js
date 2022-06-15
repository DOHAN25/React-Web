import "./index.css";
import { Avatar, Form, message } from "antd";
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
      ></Form>
    </div>
  );
}

export default LoginPage;
