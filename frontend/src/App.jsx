import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import CareerPage from './pages/CareerPage';
// import ContactUs from './pages/ContactUs';
import HireDeveloper from './pages/HireDeveloper';
// import TrainingCourses from './pages/TrainingCourses';
import Footer from './components/Footer';


import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/home" element={<Home />} />
          <Route path="/hire" element={<HireDeveloper />} />
          {/* <Route path="/navbar" element={<Navbar />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careerpage" element={<CareerPage />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/trainingcourses" element={<TrainingCourses />} />
          <Route path="/footer" element={<Footer />} /> */}
=======
          <Route path="/home" element={<Home />} /> 
          <Route path="/navbar" element={<Navbar />} />
           {/*<Route path="/about" element={<AboutUs />} />
          <Route path="/careerpage" element={<CareerPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/hiredeveloper" element={<HireDeveloper />} />
          <Route path="/trainingcourses" element={<TrainingCourses />} /> */}
          <Route path="/footer" element={<Footer />} />
>>>>>>> 500c0f581ecf48f584a608f8ad36797a4bb73546
        </Routes>
      </div>
    </Router>
  );
};

export default App;
