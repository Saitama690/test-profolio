import React from 'react';
import '../styles/Contact.css'; // Correct path to your CSS file


const Contact = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <section className="contact-section">
        {/* Conditional Rectangle Based on Theme */}
        {isDarkMode ? (
          <div className="dark-rectangle"></div>
        ) : (
          <div className="white-rectangle"></div>
        )}

        <div className="content">
          <h1 className="contact-title">Contact me via</h1>

          {/* Social Media Icons */}
          <div className="social-icons">
            <img src={`icons.png`}  alt="Contact methods" className="contact-image" />
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <p>Phone num - 09967369991</p>
            <p>Email - saitamapar@gmail.com</p>
            <p>Address - Yangon, Myanmar</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
