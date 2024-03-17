import React from 'react';
import './Landing.css'; // Import CSS file

const Landing = () => {
  return (
    // <div className="landing-container">
    //   <nav className="navbar">
    //     <div className="navbar-brand">Your Website</div>
    //     <ul className="nav-items">
    //       <li className="nav-item">Home</li>
    //       <li className="nav-item">About Us</li>
    //       <li className="nav-item">Contact Us</li>
    //       <li className="nav-item">Login/Signup</li>
    //     </ul>
    //   </nav>
    <div className="landing-container">
  <nav className="navbar">
    <div className="navbar-brand">Your Website</div>
    <ul className="nav-items">
      <li className="nav-item">Home</li>
      <li className="nav-item">About Us</li>
      <li className="nav-item">Contact Us</li>
      <li className="nav-item">Login/Signup</li>
    </ul>
  </nav>
      <header className="header">
        <div className="news-card">
          Latest News:
          {/* Add your news content here */}
        </div>
      </header>
      <footer className="footer">
        <marquee direction="left">Be aware of Cyber criminals. Protect your data!</marquee>
      </footer>
    </div>
  );
};

export default Landing;
