import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';
import LogIn from './LogIn';

const SignIn = ({ setIsSignedIn }) => {
    const navigate = useNavigate();

    // const handleSignUp = () => {
    //     navigate('/');
    // };

    const handleSignIn = () => {
        setIsSignedIn(true);
        navigate('/');
    };

    return (
        <div className="sign-in-container">
            <LogIn />
            <button className="sign-up-button" onClick={handleSignIn}>
                Sign In
            </button>
            {/* <button className="sign-up-button" onClick={handleSignUp}>
                Sign Up
            </button> */}
        </div>
    );
};

export default SignIn;
