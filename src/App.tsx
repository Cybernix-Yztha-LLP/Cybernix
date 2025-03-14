//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
//import CoursesPage from './pages/CoursesPage';
//import ServicesPage from './pages/servicesPage';
import AboutPage from './pages/aboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import JoinPage from './pages/JoinPage';
import Services from './pages/new services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* <Route path="courses" element={<CoursesPage />} /> */}
          <Route path="services" element={<Services />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="join" element={<JoinPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;