import './SpecialPackagePage.css';
import painting from '../images/pu.png';
import pu from '../images/pureal.png';
import carpentry from '../images/carpentry.png';
import wash from '../images/w8.jpg';
import c1 from '../images/c1.jpg';


function SpecialPackagePage() {

    const phoneNumber = "918422058461";

    const packages = ['PU Application Package','Painting Package','Powder Room Package','Falls Ceiling Package','Wood Appliance Package']

    const openWhatsAppChat = (phoneNumber, message) => {
    
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello, Careem Interiors I Want To Know About ${message} More..`;
        window.open(url,'_blank');
    };


    return (
        <div id="special">
            <h1>Interior Design Packages</h1>
            <div id="special-content">

                <div className="card">
                    <img src={pu} alt="img1"></img>
                    <h3>PU Application Package</h3>
                    <button onClick={() => openWhatsAppChat(phoneNumber,packages[0])} target="_blank">Know More..</button>
                </div>

                <div className="card">
                    <img src={painting} alt="img1"></img>
                    <h3>Painting Package</h3>
                    <button onClick={() => openWhatsAppChat(phoneNumber,packages[1])} target="_blank">Know More..</button>
                </div>

                <div className="card">
                    <img src={wash} alt="img1"></img>
                    <h3>Powder Room Package</h3>
                    <button onClick={() => openWhatsAppChat(phoneNumber,packages[2])} target="_blank">Know More..</button>
                </div>

                <div className="card">
                    <img src={c1} alt="img1"></img>
                    <h3>Falls Ceiling Package</h3>
                    <button onClick={() => openWhatsAppChat(phoneNumber,packages[3])} target="_blank">Know More..</button>
                </div>

                <div className="card">
                    <img src={carpentry} alt="img1"></img>
                    <h3>Wood Appliance Package</h3>
                    <button onClick={() => openWhatsAppChat(phoneNumber,packages[4])} target="_blank">Know More..</button>
                </div>
            </div>
        </div>
        
    );
}

export default SpecialPackagePage;