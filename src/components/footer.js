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
                <a href='https://www.facebook.com/profile.php?id=61571807877972&rdid=eCCuqTcry7RT9o0M&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1WAyFGLbtX%2F'><img src={fb} alt="anchor-images"></img></a>
                <a href='https://www.google.com'><img src={li} alt="anchor-images"></img></a>
                <a href='https://www.instagram.com/careem_group/'><img src={ig} alt="anchor-images"></img></a>
            </div>
            <h3>©2025 by Careem Group Interior</h3>
        </footer>
    );
}

export default footer;