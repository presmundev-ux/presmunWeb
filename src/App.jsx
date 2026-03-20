import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Secretariat from "./pages/Secretariat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/secretariat" element={<Secretariat />} />
      </Routes>
    </BrowserRouter>
  );
}