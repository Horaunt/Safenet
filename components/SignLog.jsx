// import React from 'react';
// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import Background from './Background';
// // import './SignLog.css';
// import './HomeSign.css';

// const SignLog = () => {
//     const history = useHistory();

//     const handleSignUpClick = () => {
//         history.push("/signup");
//     };

//     const handleLogInClick = () => {
//         history.push("/login");
//     };

//     return (
//         <>
//             <canvas id="canvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: '#111' }}></canvas>
//             <div className="centered">
//                 <main>
//                     <Background />
//                     <div className="btn">
//                         <button className="sign" onClick={handleSignUpClick}>Sign Up</button>
//                         <button className="log" onClick={handleLogInClick}>Log in</button>
//                     </div>
//                 </main>
//             </div>
//         </>
//     );
// };

// export default SignLog;


import React from 'react';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Background from '../components/Background';
import '../components/HomeSign.css'; // Import the MainLayout CSS file

const SignLog = () => {
    const history = useHistory();

    const handleSignUpClick = () => {
        history.push("/signup");
    };

    const handleLogInClick = () => {
        history.push("/login");
    };

    return (
        <div className="main-container">
            <div className="signlog"> 
                <canvas id="canvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: '#111' }}></canvas>
                <div className="centered">
                    <main>
                        <Background />
                        <div className="btn">
                            <button className="sign" onClick={handleSignUpClick}>Sign Up</button>
                            <button className="log" onClick={handleLogInClick}>Log in</button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SignLog;
