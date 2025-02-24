<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> 8ae04a0fdbcfa848479047330bc51fe30b8901da
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import HireDeveloper from './pages/HireDeveloper';
<<<<<<< HEAD
import DotNetDeveloper from './pages/DotNetDeveloper';
// import TrainingCourses from './pages/TrainingCourses';
// import Footer from './components/Footer';

=======
import Footer from './components/Footer';
>>>>>>> 8ae04a0fdbcfa848479047330bc51fe30b8901da

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
<<<<<<< HEAD
          <Route path="/hire" element={<HireDeveloper />} />
          {/* 
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careerpage" element={<CareerPage />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/trainingcourses" element={<TrainingCourses />} />
          <Route path="/footer" element={<Footer />} /> */}
           <Route path="/hire/dotnet" element={<DotNetDeveloper />} /> 
=======
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/hire" element={<HireDeveloper />} />
>>>>>>> 8ae04a0fdbcfa848479047330bc51fe30b8901da
        </Routes>
      </div>
    </Router>
  );
};

export default App;
