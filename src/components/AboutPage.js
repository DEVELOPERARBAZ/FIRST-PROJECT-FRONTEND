import sundar from '../images/sundar.jpg';
import h2 from '../images/h2.jpg';

import React from 'react';
import './AboutPage.css';

function AboutPage() {
    return (
        <div className="About">
            <h2>About Us</h2>
            <img id="AboutTv" src={h2} alt="NOT LOADED"></img>
            <hr></hr>
            <div className='scroller'>
                        <p><h2>Careem Group</h2>it is our pleasure introducing our company and services to you with a view of establishing a mutually beneficial working relationship with you and your establishmen our company <br></br>careem group is a dynamic painting providing company established in 2015 why hire a company for professional painting?<br></br>the answer is triple time, quality, and value. most of us feel more valuable than our money is our time.<br></br> your interior or exterior residential or commercial paint job, using the safest and most suitable materials and adding the latest design, is worth it.</p>
                        <img src={sundar} alt="Sundar Kanya"></img>
            </div>
        </div>
    );
}

export default AboutPage;