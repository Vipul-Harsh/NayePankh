import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import About from "./components/About";
import Crausel from "./components/Crausel";
import JoinTeam from "./components/JoinTeam";
import Footer from "./components/Footer";
import AboutUs from "./AboutUs";
import HomePage from "./Pages/HomePage";
import CertificatePage from "./Pages/CertificatePage";
import News from "./Pages/News";
import LoginRegister from "./components/LoginRegister";
import Reviews from "./components/Reviews";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/review" element={<Reviews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
