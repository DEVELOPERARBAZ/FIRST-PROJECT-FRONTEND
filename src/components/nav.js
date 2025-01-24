// import { Home, About, SpecialPackages, Gallery, InteriorProjectTour, Contact } from './navElements';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';
function Nav({isOpen,toggleNavbar}) {

    const Location = useLocation();
    return (
        <nav className={isOpen ? 'show':'hide'}>
            <ul id="list" type="none">
                 <li onClick={toggleNavbar} className={Location.pathname === '/home' ? 'active' : 'btn'} id="home"> <Link to="/home">Home</Link></li>
                 <li onClick={toggleNavbar} className={Location.pathname === '/about' ? 'active' : 'btn'} id="about"> <Link to="/about">About</Link> </li>
                 <li onClick={toggleNavbar} className={Location.pathname === '/specialPackages' ? 'active' : 'btn'} id="sp"> <Link to="/specialPackages">SpecialPackages</Link> </li>
                 <li onClick={toggleNavbar} className={Location.pathname === '/gallery' ? 'active' : 'btn'} id="gall"> <Link to="/gallery">Gallery</Link> </li>
                 <li onClick={toggleNavbar} className={Location.pathname === '/interiorProjectTour' ? 'active' : 'btn'} id="ipt"> <Link to="/interiorProjectTour">InteriorProjectTour</Link> </li>
                 <li onClick={toggleNavbar} className={Location.pathname === '/contact' ? 'active' : 'btn'} id="con"> <Link to="/contact">Contact</Link> </li>
            </ul>
        </nav>
    );
}
export default Nav;
