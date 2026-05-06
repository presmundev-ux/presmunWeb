import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Secretariat from "./pages/Secretariat";
import AboutPUMUN from "./pages/AboutPUMUN";
import AboutPresMUN from "./pages/AboutPresMUN";
import Committees from "./pages/Councils";
import UNGA from "./pages/UNGA"; 
import IPC from "./pages/IPC";
import UNHRC from "./pages/UNHRC"; 
import PresidentUniversity from "./pages/PresidentUniversity";
import ScrollToTop from "./components/ScrollToTop";



import CouncilTemplate from "./pages/CouncilTemplate"; 

import Press from "./pages/Press"; 
import Article from "./pages/Article";
export default function App() {
  const dummyText = "Sed ut perspiciatis..."; 

  return (
    <BrowserRouter>
    <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secretariat" element={<Secretariat />} />
        <Route path="/about-pumun" element={<AboutPUMUN />} /> 
        <Route path="/about-presmun" element={<AboutPresMUN />} /> 
        
        <Route path="/committees" element={<Committees />} />
        <Route path="/committees/UNGA" element={<UNGA />} />
        <Route path="/committees/UNHRC" element={<UNHRC />} />
        <Route path="/committees/IPC" element={<IPC />} />
        

        <Route path="/press" element={<Press />} /> 
        <Route path="/press/:id" element={<Article />} />
        <Route path="/president-university" element={<PresidentUniversity />} />
      </Routes>
    </BrowserRouter>
  );
}