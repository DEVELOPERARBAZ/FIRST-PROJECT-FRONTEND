import './SpecialPackagePage.css';
import painting from '../images/pu.png';
import pu from '../images/pureal.png';
import carpentry from '../images/carpentry.png';
import wash from '../images/w8.jpg';
import c1 from '../images/c1.jpg';



const openWhatsAppChat = (phoneNumber, message) => {
    // const url = `https://wa.me/${phoneNumber}?text${message}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url,'_blank');
};

function SpecialPackagePage() {

    const phoneNumber = "918422058461";
    const message = encodeURIComponent('Hello! This is a default message.');

    return (
        <div id="special">
            <h1>Interior Design Packages</h1>
            <div id="special-content">

                <div className="card">
                    <img src={pu}></img>
                    <h3>PU Application Package</h3>
                    <button onClick={() => openWhatsAppChat(phoneNumber,message)} target="_blank">Know More..</button>
                </div>

                <div className="card">
                    <img src={painting}></img>
                    <h3>Interior Painting Package</h3>
                    <button onClick={() => openWhatsAppChat(phoneNumber,message)} target="_blank">Know More..</button>
                </div>

                <div className="card">
                    <img src={wash}></img>
                    <h3>Interior Bathroom Package</h3>
                    <button onClick={() => openWhatsAppChat(phoneNumber,message)} target="_blank">Know More..</button>
                </div>

                <div className="card">
                    <img src={c1}></img>
                    <h3>Ceiling Falls Package</h3>
                    <button onClick={() => openWhatsAppChat(phoneNumber,message)} target="_blank">Know More..</button>
                </div>

                <div className="card">
                    <img src={carpentry}></img>
                    <h3>Carpentry Work Package</h3>
                    <button onClick={() => openWhatsAppChat(phoneNumber,message)} target="_blank">Know More..</button>
                </div>
            </div>
        </div>
        
    );
}

export default SpecialPackagePage;