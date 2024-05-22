import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import PageA from "../../pages/PageA";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageA" element={<PageA />} />
      </Routes>
    </BrowserRouter>
  );
};
export function App() {
  return <Router />;
}
