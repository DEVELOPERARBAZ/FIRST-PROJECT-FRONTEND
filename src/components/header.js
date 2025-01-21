
import mainLogo from '../images/EditedMainLogo.png';
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