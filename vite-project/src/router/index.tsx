import { Route, Routes } from "react-router-dom";
import Home from "../page";
import SampleMain from "../page/subPages/sample";
import PopupPage from "../page/subPages/sample/popupPage";
export default function PagesRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sample" element={<SampleMain />} />
      <Route path="/sample/popup" element={<PopupPage />} />
    </Routes>
  );
}
