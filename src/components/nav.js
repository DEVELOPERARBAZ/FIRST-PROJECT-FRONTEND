import { Home, About, SpecialPackages, Gallery, InteriorProjectTour, Contact } from './navElements';
import { Link } from 'react-router-dom';
import './nav.css';
function nav() {
    return (
        <nav className="foreground">
            <ul id="list" type="none">
                 <button className='btn' id="home"> <Link to="/home"><Home /></Link></button>
                 <button className='btn' id="about"> <Link to="/about"><About /></Link> </button>
                 <button className='btn' id="sp"> <Link to="/specialPackages"><SpecialPackages /></Link> </button>
                 <button className='btn' id="gall"> <Link to="/gallery"><Gallery /></Link> </button>
                 <button className='btn' id="ipt"> <Link to="/interiorProjectTour"><InteriorProjectTour /></Link> </button>
                 {/* <button className='btn' id="ib"> <Link to="/interiorBlog"><InteriorBlog /></Link> </button> */}
                 <button className='btn' id="con"> <Link to="/contact"><Contact /></Link> </button>
            </ul>
        </nav>
    );
}
export default nav;
