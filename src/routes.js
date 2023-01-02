import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import CriarConta from "./pages/criarconta";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/CriarConta" element={<CriarConta />} />
      </Routes>
    </BrowserRouter>
  );
}
