import React from 'react';
import '../styles/Home.css'; // Import your CSS for the Home component
import {  useNavigate } from 'react-router-dom';

const Home = ({ isDarkMode }) => {
  const navigate = useNavigate()
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <section className="home-section">
        {/* Conditional Rectangle Based on Theme */}
        {isDarkMode ? (
          <div className="dark-rectangle"></div>
        ) : (
          <div className="white-rectangle"></div>
        )}

        <div className="left-section">
          <h1 className="name">Swan Htet Aung</h1>
          <h2 className="title">Fullstack Developer.</h2>
          <p className="description">
            I have been developing beautiful and user-friendly web apps for mobile and web.
          </p>
          <button className="btn learn-more-btn" onClick={()=>{navigate('/about')}}>Learn More</button>
        </div>

        <div className="right-section">
          <div className="profile-container">
            <img 
              src={`profile-image.png`} 
              alt="Developer" 
              className="profile-image" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
