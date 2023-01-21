import Chat from "./pages/chat";
import CriarConta from "./pages/criarconta";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/CriarConta" element={<CriarConta />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
