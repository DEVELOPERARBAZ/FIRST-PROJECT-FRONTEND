import {useState,useEffect} from 'react';
import './InteriorProjectPage.css';
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
import k5 from '../images/k5.jpg';

import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import c4 from '../images/c4.jpg';
import c5 from '../images/c5.jpg';
import c6 from '../images/c6.jpg';
import c7 from '../images/c7.jpg';
import c8 from '../images/c8.jpg';
import c9 from '../images/c9.jpg';
import c10 from '../images/c10.jpg';
import c11 from '../images/c11.jpg';

import w1 from '../images/w1.jpg';
import w2 from '../images/w2.jpg';
import w3 from '../images/w3.jpg';
import w4 from '../images/w4.jpg';
import w5 from '../images/w5.jpg';
import w6 from '../images/w6.jpg';
import w7 from '../images/w7.jpg';
import w8 from '../images/w8.jpg';

export default function InteriorProjectTour() {

    const sections = [
        { title: 'Interior hall design', images: [h1, h2, h3, h4] },
        { title: 'Interior bedroom', images: [b1, b2, b3, b4] },
        { title: 'Modular kitchen', images: [k1, k2, k3, k4, k5] },
        { title: 'Ceiling Falls', images: [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11] },
        { title: 'Interior washroom and bathroom design', images: [w1, w2, w3, w4, w5, w6, w7, w8] },
    ];

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);


    const openPopup = (image) => {
        setCurrentImage(image);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="ipt">
            <div className="backgroundImage">
                <h2>Residential Project Tour</h2>
            </div>

            {sections.map((section, index) => (
                <div key={index} className="section">
                    <h2 className="section-title">
                        <span>{section.title}</span>
                    </h2>

                    <div className="container">
                        {section.images.map((src, imgIndex) => (
                            <img
                                key={imgIndex}
                                className="images"
                                src={src}
                                alt={`${section.title} ${imgIndex + 1}`   
                                }
                                onClick={() => openPopup(src)} 
                            />
                        ))}
                    </div>

                </div>
            ))}

            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <img src={currentImage} alt="Popup Image" />
                        <button className="close-btn" onClick={closePopup}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}
