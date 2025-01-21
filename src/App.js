import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Nav from './components/nav';
import Home from './components/HomePage';
import About from './components/AboutPage';
import SpecialPackage from './components/SpecialPackagePage';
import Gallery from './components/GalleryPage';
import InteriorProjectTour from './components/InteriorProjectTour';
import ContactPage from './components/ContactPage';
import Footer from './components/footer';
import Er from './components/ErrorPage';
import logo from './images/EditedMainLogo.png';
import './App.css';

function App() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    // Set a delay of 3 seconds before rendering the app
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 3000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (!showApp) {
    // Display a loading placeholder during the delay
    return (
      <div className="loading-screen">
        <img src={logo} alt="companyLogo"></img>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Router>
        <Nav />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/SpecialPackages" element={<SpecialPackage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/InteriorProjectTour" element={<InteriorProjectTour />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="*" element={<Er />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
