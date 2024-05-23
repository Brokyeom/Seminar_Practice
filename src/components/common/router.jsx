import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import Step2 from "../../pages/Step2";
import Step3 from "../../pages/Step3";
import Step4 from "../../pages/Step4";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
      </Routes>
    </BrowserRouter>
  );
};
export function App() {
  return <Router />;
}
