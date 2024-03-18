import React from 'react';
import './Landing.css'; // Import CSS file
import { useHistory } from 'react-router-dom';

const Landing = () => {
  const history = useHistory();

    const handleSignUpClick = () => {
        history.push("/signlog");
    };
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
    <div className='landing'>
    <div className="landing-container">
  <nav className="navbar">
    <div className="navbar-brand">Safenet</div>
    <ul className="nav-items">
    <button className="nav-item" >Home</button>
<button className="nav-item" >About Us</button>
<button className="nav-item" >Contact Us</button>
<button className="nav-item" onClick={handleSignUpClick}>Login/Signup</button>

    </ul>
  </nav>
      <header className="header">
        <div className="news-card">
          Latest News:
          {/* Add your news content here */}
        </div>
        <div className="video-container">
        <iframe
        
        
          className="youtube-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/D4c0UTnNXDM?si=R7S_Em3SWqoy7c25"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      </header>
      <footer className="footer">
        <marquee direction="left">Alert! Cyber crooks are lurking in the shadows, ready to snatch your digital identity. Safeguard your data fortress with the shield of awareness. Stay savvy, stay secure, for your digital safety is paramount in the cyber wilderness.</marquee>
      </footer>
    </div>
    </div>
  );
};

export default Landing;
