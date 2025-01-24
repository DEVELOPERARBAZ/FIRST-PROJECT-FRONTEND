// import backGroundVideo from "../videos/backGroundVideo.mp4";
import lady from "../images/lady.jpg";
import services from "../images/b4.jpg";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Slider from "./slider";
export default function HomePage() {
  const navigate = useNavigate();

  const toAbout = () => {
    navigate("/InteriorProjectTour");
  };

  const toContact = () => {
    navigate("/contact");
  };

  return (
    <div id="homepage">
      <h1 id="video-heading">"Creating Spaces You’ll Love to Live In"</h1>
      <video className="video-container" autoPlay muted loop playsInline>
        <source
          src="https://video.wixstatic.com/video/18af5f_f04874b793b04cd2a440ffc7ae93eb23/720p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>
      <hr></hr>
      <section className="about">
        <div id="left">
          <h1>
            we provide ourselves as a company provide unmatchable services to
            our client with.
          </h1>
          <ol type="none">
            <li>Living Room</li>
            <li>Bedroom</li>
            <li>Modular kitchen</li>
            <li>Designing Falls Ceiling</li>
            <li>Powder Room</li>
            <button id="learn" onClick={toAbout}>
              Know More..
            </button>
          </ol>
          <h4>
            Experience the expertise of Careem Group interior where innovation
            meets elegance. Trust us to be your premier interior designers,
            creating spaces that inspire and elevate your lifestyle. Together,
            let's transform your home into a masterpiece of design
          </h4>
          <h4>
            With our expanding reach, Careem Group interior serves clients
            throughout Mumbai, operating from Kurla , mumbai, maharashtra
            interiors design office in Kurla East. Our dedicated team of
            interior designers and craftsmen work diligently to bring your
            vision to life, crafting stunning and functional interiors that
            redefine luxury.
          </h4>
          <h2 id="wishes">
          <span>home</span> is where the <span>heart</span> is ..
          </h2>
        </div>
        {/* <img id="lady" src={lady} alt="lady"></img> */}
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
          <h4>Residential and Commercial Designing</h4>
          <h5>Design your home with a unique touch and design.</h5>
          <button onClick={toContact}>Book Now</button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
