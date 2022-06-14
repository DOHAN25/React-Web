import "antd/dist/antd.min.css";
import "./App.css";
import MainPage from "./main";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
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
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
          <Avatar icon={<UserOutlined />} />
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
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
