import mainLogo from '../images/EditedMainLogo.png';
import menu from '../images/menu.png';
import './header.css';
export default function Comp({toggleNavbar}) {
    return (
        <header id='header-section' >
            <img
                id="mainLogo"
                src={mainLogo}
                alt='NOT LOADED'
            ></img>
            <button onClick={toggleNavbar} id="icon-btn"><img id="menu-img" src={menu} alt="menuitem"></img></button>
        </header>
    );
}
