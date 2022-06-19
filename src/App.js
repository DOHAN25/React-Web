import "antd/dist/antd.min.css";
import "./App.css";
import MainPage from "./main";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import LoginPage from "./login";
import SignUpPage from "./login/signup.js";
import { Button, Avatar } from "antd";
import { DownloadOutlined, UserOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="iconlogo" />
          </Link>
          <div id="button-area">
            <Button
              size="large"
              onClick={function () {
                history.push("/upload");
              }}
              icon={<DownloadOutlined />}
            >
              상품 업로드
            </Button>
            <Button
              size="large"
              onClick={function () {
                history.push("/login");
              }}
              icon={<UserOutlined />}
            >
              로그인
            </Button>
          </div>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route path={"/"} exact={true}>
            <MainPage />
          </Route>
          <Route path="/products/:id" exact={true}>
            <ProductPage />
          </Route>
          <Route path="/upload" exact={true}>
            <UploadPage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/signup.js" exact={true}>
            <SignUpPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
