import "./App.css";
import MainPage from "./main";
import { Routes, Route, Link } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="iconlogo" />
          </Link>
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path="/products/:id" element={<ProductPage />}></Route>
          <Route path="/upload" element={<UploadPage />}></Route>
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
