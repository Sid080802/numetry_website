<<<<<<< HEAD

=======
>>>>>>> b1857f323f4b878d9b4d9aff7d993519e6f89c97
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Navbar from './components/Navbar';
import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import CareerPage from './pages/CareerPage';
<<<<<<< HEAD
import ContactUs from './pages/ContactUs';
// import HireDeveloper from './pages/HireDeveloper';
// import TrainingCourses from './pages/TrainingCourses';
import Footer from './components/Footer';
=======
// import ContactUs from './pages/ContactUs';
import HireDeveloper from './pages/HireDeveloper';
// import TrainingCourses from './pages/TrainingCourses';
// import Footer from './components/Footer';

>>>>>>> b1857f323f4b878d9b4d9aff7d993519e6f89c97

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
<<<<<<< HEAD
          {/* <Route path="/navbar" element={<Navbar />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careerpage" element={<CareerPage />} />
          <Route path="/hiredeveloper" element={<HireDeveloper />} />
          <Route path="/trainingcourses" element={<TrainingCourses />} /> */
          <Route path="/contactus" element={<ContactUs />} />}
          <Route path="/footer" element={<Footer />} />
=======
          <Route path="/hire" element={<HireDeveloper />} />
          {/* <Route path="/navbar" element={<Navbar />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careerpage" element={<CareerPage />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/trainingcourses" element={<TrainingCourses />} />
          <Route path="/footer" element={<Footer />} /> */}
>>>>>>> b1857f323f4b878d9b4d9aff7d993519e6f89c97
        </Routes>
      </div>
    </Router>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> b1857f323f4b878d9b4d9aff7d993519e6f89c97
