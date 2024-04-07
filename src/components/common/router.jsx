import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { 스텝원 } from "../../pages/스텝원";
import { 스텝투 } from "../../pages/스텝투";
import { 스텝쓰리 } from "../../pages/스텝쓰리";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step1" element={<스텝원 />} />
        <Route path="/step2" element={<스텝투 />} />
        <Route path="/step3" element={<스텝쓰리 />} />
      </Routes>
    </BrowserRouter>
  );
};
export function App() {
  return <Router />;
}
