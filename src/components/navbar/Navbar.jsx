// src/components/Navbar.js
import React, { useState } from 'react';
import logo from "../images/logo.png";
import "./navbar.css";
import Search from '../search/Search';
import ProfilePopup from '../popup/ProfilePopup';

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showProfilePopup, setShowProfilePopup] = useState(false);
    const [user, setUser] = useState(null); // Assuming user details are fetched on login

    // Function to toggle profile popup
    const toggleProfilePopup = () => {
        setShowProfilePopup(!showProfilePopup);
    };

    // Function to handle login
    const handleLogin = () => {
        // Simulate login functionality
        setLoggedIn(true);
        // Fetch user details from API or set user details
        setUser({
            fullName: 'John Doe',
            email: 'john.doe@example.com',
            profilePicture: 'url-to-profile-picture',
            // Add other user details like courses, certifications if needed
        });
    };

    // Function to handle logout
    const handleLogout = () => {
        setLoggedIn(false);
        setUser(null);
        setShowProfilePopup(false); // Close profile popup on logout
        // Other logout actions (e.g., clear session, redirect, etc.)
    };
    
    return (
      <div className='navbar-container'>
        <div className='navbar-title'>
          <img
            src={logo}
            width="28px"
            height="28px"
            alt='icon'
          />
          <h1>DEEBUG</h1>
        </div>
  
        <div className='search-container'>
          <Search />
        </div>  
        <div className='profilesign'>
            <div className="navbar-actions">
                {loggedIn ? (
                    <div className="profile">
                        <button onClick={toggleProfilePopup} className="profile-button">
                            Profile
                        </button>
                        {ProfilePopup && (
                            <ProfilePopup
                                user={user}
                                onClose={toggleProfilePopup}
                                onLogout={handleLogout}
                            />
                        )}
                    </div>
                ) : (
                    <button onClick={handleLogin} className="signin-button">
                        Sign In
                    </button>
                )}
            </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;