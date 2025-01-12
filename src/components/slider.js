// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import h1 from '../images/h1.jpg';
import h2 from '../images/h2.jpg';
import h3 from '../images/h3.jpg';
import h4 from '../images/h4.jpg';

import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b3.jpg';
import b4 from '../images/b4.jpg';

import k1 from '../images/k1.jpg';
import k2 from '../images/k2.jpg';
import k3 from '../images/k3.jpg';
import k4 from '../images/k4.jpg';

import './slider.css';
 // Create this CSS file for custom styling
  const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    // Replace these URLs with your actual images
    const images = [
      h1,h2,h3,h4,b1,b2,b3,b4,k1,k2,k3,k4
    ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    useEffect(() => {
      const interval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
      return () => clearInterval(interval); // Cleanup the interval when component unmounts
    });

  return (
    <div className="slider-container">
      <button className="slider-button-prev" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="slider">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="slider-button-next" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};
export default ImageSlider;
