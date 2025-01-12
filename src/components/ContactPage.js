

// import contactImage from '../images/contactImage.jpg';
import { useState } from 'react';
import './ContactPage.css'


function ContactPage() {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        location: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [successPopup, setSuccessPopup] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loader
      
        try {
          const response = await fetch(`https://first-project-careem-1.onrender.com/contact`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          setLoading(false); // Hide loader after fetch
      
          if (response.ok) {
            setStatus('Form submitted successfully!');
            setSuccessPopup(true); // Show success popup
            setFormData({ name: '', email: '', number: '', location: '', message: '' });
      
            // Hide the popup after 3 seconds
            setTimeout(() => {
              setSuccessPopup(false);
            }, 3000);
          } else {
            setStatus('Failed to send email. Please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
          document.write(error);
          setStatus('An error occurred. Please try again.');
          setLoading(false); // Hide loader in case of error
        }
      };

    return (
        <div id="cp">
            <h2>Get in Touch</h2>
            <div className="container">
                <div className="left">
                    <div id="top">
                        <p>Contact Me
                            <a href="tel:+918108323120">+91 8108323120</a>
                            <a href="mailto:careemgroup97@gmail.com?subject=Inquiry&body=Hello, I have a question about...">careemgroup97@gmail.com</a>
                            <span>address : room no.07 akhtari begum compex cementry road qureshi nagar kurla east mumbai 400070.</span>
                        </p>
                    </div>

                    <div id="bottom">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Name</label><input type="text" placeholder="Enter Your Name" id="username" name="name" value={formData.name} onChange={handleChange} required />

                            <label htmlFor="usermail">Email</label><input type="email" placeholder="Enter Your Email" id="usermail" name="email" value={formData.email} onChange={handleChange} required  />

                            <label htmlFor="usernumber">Number</label><input type="tel" placeholder="Enter Your Number" id="usernumber" name="number" value={formData.number} onChange={handleChange} required />

                            <label htmlFor="location">Location</label><input type="text" placeholder="Your Location" id="location" name="location" value={formData.location} onChange={handleChange} required  />

                            <textarea id="description" type="text" name="message" placeholder="Enter Your message here .." minLength={0} maxLength={200} value={formData.message} onChange={handleChange} required  />
                            <button type="submit" onSubmit={handleSubmit} value="Send Enquiry">SUBMIT</button>
                        </form>

                        {status && <p>{status}</p>}
                        {loading && (
                            <div className="loader">
                            <div className="spinner"></div>
                            </div>
                        )}

                        {successPopup && (
                            <div className="success-popup">
                            <p>Form submitted successfully!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactPage;