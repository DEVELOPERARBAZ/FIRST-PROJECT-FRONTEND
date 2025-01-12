import { Home, About, SpecialPackages, Gallery, InteriorProjectTour, InteriorBlog, Contact } from './navElements';
import { BrowserRouter as Router, Routes, Route, NavLink, Scri, NavLinkpts } from 'react-router-dom';
import './nav.css';
import ScrollToTop from "./ScrollToTop";

function nav() {
    return (
        <nav className="foreground">
            <ul id="list" type="none">
                 <button className='btn' id="home"> <NavLink to="/home"><Home /></NavLink></button>
                 <button className='btn' id="about"> <NavLink to="/about"><About /></NavLink> </button>
                 <button className='btn' id="sp"> <NavLink to="/specialPackages"><SpecialPackages /></NavLink> </button>
                 <button className='btn' id="gall"> <NavLink to="/gallery"><Gallery /></NavLink> </button>
                 <button className='btn' id="ipt"> <NavLink to="/interiorProjectTour"><InteriorProjectTour /></NavLink> </button>
                 {/* <button className='btn' id="ib"> <NavLink to="/interiorBlog"><InteriorBlog /></NavLink> </button> */}
                 <button className='btn' id="con"> <NavLink to="/contact"><Contact /></NavLink> </button>
            </ul>
        </nav>
    );
}
export default nav;
