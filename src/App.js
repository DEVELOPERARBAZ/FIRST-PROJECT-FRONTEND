import Header from './components/header'
import Nav from './components/nav';
import Home from './components/HomePage';
import About from './components/AboutPage';
import SpecialPackage from './components/SpecialPackagePage';
import Gallery from './components/GalleryPage';
import InteriorProjectTour from './components/InteriorProjectTour';
import ContactPage from './components/ContactPage';
import Footer from './components/footer';
import Er from './components/ErrorPage';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Er />; // Render error page if an error occurs
    }
    return this.props.children;
  }
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
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
            <Route path="/*" element={<Er />} /> {/* Catch-all route */}
          </Routes>
        </Router>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;

