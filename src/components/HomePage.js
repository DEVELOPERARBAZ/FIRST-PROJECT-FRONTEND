import backGroundVideo from "../videos/backGroundVideo.mp4";
import lady from "../images/lady.jpg";
import services from '../images/b4.jpg';
import "./HomePage.css";
import { useNavigate } from 'react-router-dom';
import Slider from "./slider";
export default function HomePage() {

    const navigate = useNavigate();

    const toAbout = () => {
        navigate("/about");
    };

    const toContact = () => {
        navigate("/contact");
    };

    return (
        <div id="homepage">
            <video
                className="video-container"
                src={backGroundVideo}
                autoPlay
                playsInline
                loop
            ></video>
            <hr></hr>
            <section className="about">
                <div id="left">
                    <h2>
                        we provide ourselves as a company provide unmatchable services to
                        our client with.
                    </h2>
                    <ol type="1">
                        <li>interior painting</li>
                        <li>exterior painting</li>
                        <li>wood application</li>
                        <li>water proofing</li>
                        <li>PU coating</li>
                        <li>DICP & Laminate etc</li>
                        <button id="learn" onClick={toAbout}>Learn More</button>
                    </ol>
                    <h4>we are experts in the application of decorative and protective finishers in residential, commercial, institutional, and industrial settings as painters and decorators.</h4>
                    <h4>we have the expertise and experience to prepare any surface and then apply your choice of paint, high-performance coating, waterproofing, fireproofing, varnish, shellac, wall covering, and specialty finishes</h4>
                    <h2 id="wishes">WE’LL   PAINT  YOUR <span>DREAMS</span> INTO <span>REALITY</span></h2>
                </div>
                <img id="lady" src={lady}></img>
            </section>
            <hr></hr>
            <div className="project">
                <h2>Careem Group Projects</h2>
                <Slider />
            </div>
                <hr></hr> 
            <div className="services">
                <h2>Careem Group Services</h2>
                <div id="content">
                    <img src={services} alt="display"></img>
                    <h4>Residential Interior Designing</h4>
                    <h5>Design your home with a unique touch and design.</h5>
                    <button onClick={toContact}>Book Now</button>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}
