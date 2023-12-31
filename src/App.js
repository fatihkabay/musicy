import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Musicy from "./components/Musicy";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/musicy" element={<Musicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
