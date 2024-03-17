import React from 'react';
import './SignUp.css'; // Import CSS file

const SignUp = () => {
  return (
    <div className="sign-up-container"> {/* Use className to apply styles */}
      <div className="sign-up-form"> {/* Use className to apply styles */}
        <h2>Sign Up</h2>
        <div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
