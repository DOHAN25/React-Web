import "./App.css";
import MainPage from "./main";
import { Routes, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<MainPage />}></Route>
        <Route path="/products/:id" element={<ProductPage />}></Route>
        <Route path="/upload" element={<UploadPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
