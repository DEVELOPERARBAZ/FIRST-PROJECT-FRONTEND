
import mainLogo from '../images/originalCompanyLogo.jpg';
import './header.css';
function comp() {
    return (
        <header id='header-section'>
            <img
                id="mainLogo"
                src={mainLogo}
                alt='NOT LOADED'
            ></img>
        </header>
    );
}

export default comp;