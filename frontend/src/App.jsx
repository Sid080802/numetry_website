import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import HireDeveloper from './pages/HireDeveloper';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/hire" element={<HireDeveloper />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
