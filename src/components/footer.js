import yt from '../images/youtube.png';
import fb from '../images/facebook.png';
import li from '../images/linked.png';
import ig from '../images/instagram.png';
import './footer.css';

function footer() {
    return (
        <footer>
            <div id="footer-nav">
                <a href='https://www.youtube.com'><img src={yt} alt="anchor-images"></img></a>
                <a href='https://www.facebook.com'><img src={fb} alt="anchor-images"></img></a>
                <a href='https://www.google.com'><img src={li} alt="anchor-images"></img></a>
                <a href='https://www.instagram.com'><img src={ig} alt="anchor-images"></img></a>
            </div>
            <h3>©2024 by Aureleo Interior</h3>
        </footer>
    );
}

export default footer;