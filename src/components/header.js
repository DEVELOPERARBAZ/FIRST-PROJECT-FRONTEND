
import mainLogo from '../images/originalCompanyLogo.jpg';
import menuLogo from '../images/menuIcon.png';
import './header.css';
function comp() {
    return (
        <header id='header-section'>
            <img
                id="mainLogo"
                src={mainLogo}
                alt='NOT LOADED'
            ></img>
            <img
                id="menuIcon"
                src={menuLogo}
                alt="NOT LOADED"></img>
        </header>
    );
}

export default comp;