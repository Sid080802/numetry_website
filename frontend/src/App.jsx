import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import HireDeveloper from './pages/HireDeveloper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IndustryChart from "./pages/IndustryChart";

import './App.css';
import DotNetDeveloper from "./pages/DotNetDeveloper";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/industry" element={<IndustryChart />} />
          <Route path="/hire" element={<HireDeveloper />} />
          <Route path="/hire/dotnet" element={<DotNetDeveloper />} />
          

        </Routes>
      </div>
    </Router>
  );
};

export default App;
