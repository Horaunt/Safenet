import React from 'react';
import {useEffect} from "react";
import Background from './Background';
import '..//components/SignLog.css';

const SignLog = () => {

    return (
        <>
            <canvas id="canvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: '#111' }}></canvas>
            <div className="centered">
                <main>
                    <Background/>
                    <div className="btn">
                        <button className="sign">Sign Up</button>
                        <button className="log">Log in</button>
                    </div>
                </main>
            </div>
        </>
    );
};

export default SignLog;
