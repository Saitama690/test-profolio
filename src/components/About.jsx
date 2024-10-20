// src/components/About.jsx
import React from 'react';
import '../styles/About.css'; // Correct path to your CSS file

const About = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <section className="about-section">
        {/* Conditional Rectangle Based on Theme */}
        {isDarkMode ? (
          <div className="dark-rectangle"></div>
        ) : (
          <div className="white-rectangle"></div>
        )}

        <div className="content">
          <h1 className="name">Hi, I’m Swan Htet Aung</h1>
          <p className="description">
            I'm a passionate web developer from Yangon, Myanmar. I specialize in building modern web applications using React, Express, and other technologies. With a strong foundation in front-end and back-end development, I love creating clean, efficient, and scalable solutions. I’m also a dedicated learner, currently expanding my skills in full-stack development and aiming to pursue IT studies in Japan. When I’m not coding, I enjoy watching anime, playing games, and exploring new programming projects.
          </p>

          {/* My Projects Blank Div */}
          <div className="projects-div">
            <h3>My Projects -</h3>
          </div>
        </div>

        {/* Profile Image Container with Stack Title */}
        <div className="profile-container">
          <h3 className="mystack">My Stack</h3>
          <img 
            src={`about-me-image.png`} 
            alt="Swan Htet Aung" 
            className="profile-image" 
            loading="lazy" 
          />
        </div>
      </section>
    </div>
  );
};

export default About;
