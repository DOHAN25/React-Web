import "./index.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function loginPage() {
  return (
    <div id="login-container">
      <div id="avatar-box">
        <Avatar
          size={64}
          icon={<UserOutlined />}
          onClick={function () {
            history.push("/login");
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default loginPage;
