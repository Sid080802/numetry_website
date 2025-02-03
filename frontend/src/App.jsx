import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Navbar from './components/Navbar';
import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import CareerPage from './pages/CareerPage';
// import ContactUs from './pages/ContactUs';
// import HireDeveloper from './pages/HireDeveloper';
// import TrainingCourses from './pages/TrainingCourses';
// import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/navbar" element={<Navbar />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careerpage" element={<CareerPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/hiredeveloper" element={<HireDeveloper />} />
          <Route path="/trainingcourses" element={<TrainingCourses />} />
          <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
