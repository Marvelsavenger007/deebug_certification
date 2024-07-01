import React, {useState} from 'react';
import './signin.css';
import closed from "../images/eyeclosed.png"
import open from "../images/eyeopen.png";

const LogIn = ({ setIsSignedIn }) => {
    const [isFullNameFocused, setIsFullNameFocused] = useState(false);
    const [fullName, setFullName] = useState('');
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [transform, setTransform] = useState(false);

   
    const handleFullNameFocus = () => {
        setIsFullNameFocused(true);
    };

    const handleFullNameBlur = () => {
        setIsFullNameFocused(false);
    };

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
    };

    const handlePasswordBlur = () => {
        setIsPasswordFocused(false);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        setTransform(true);
        setTimeout(() => setTransform(false), 300); // duration should match your CSS transition time
    };

    return (
        <div className="signin-main-container">
            <div className='signin-parent'>
                <h1>Sign In</h1>
                <p>Please enter your details</p>
                <div className="signin-input-container">
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder=""
                        className={`signin-input ${isFullNameFocused || fullName ? 'not-empty' : ''}`}
                        onFocus={handleFullNameFocus}
                        onBlur={handleFullNameBlur}
                        onChange={handleFullNameChange}
                        value={fullName}
                    />
                    <label
                        htmlFor="fullname"
                        className="placeholder-label"
                    >
                        Username
                    </label>
                </div>
                <div className="signin-input-container">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder=""
                        className={`signin-input ${isPasswordFocused || password ? 'not-empty' : ''}`}
                        onFocus={handlePasswordFocus}
                        onBlur={handlePasswordBlur}
                        onChange={handlePasswordChange}
                        value={password}
                    />
                    <label
                        htmlFor="password"
                        className="placeholder-label"
                    >
                        Password
                    </label>
                    <button
                        type="button"
                        className="view-password-button"
                        onClick={togglePasswordVisibility}
                    >
                    <img 
                        src={passwordVisible ? open : closed} 
                        alt={passwordVisible ? "Password visible" : "Password hidden"}
                        onClick={togglePasswordVisibility}
                        style={{ cursor: 'pointer' }}
                        width="20px"
                        height="20px"
                        className={`password-visibility ${transform ? 'transform' : ''}`}
                    />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn