import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import logo from "../images/logo.png";
import "./navbar.css";
import frame from '../images/profile.png';
import searchIcon from "../images/search.png";
import Modal from "react-modal";

Modal.setAppElement('#root');

const Navbar = ({ isSignedIn, setIsSignedIn }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isSearchExpanded, setIsSearchExpanded] = useState(window.innerWidth >= 768);
    const location = useLocation();
    const navigate = useNavigate();

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleLogout = () => {
        setIsSignedIn(false);
        closeModal();
        navigate('/');
    };

    const toggleSearch = () => {
        if (window.innerWidth < 768) {
            setIsSearchExpanded(!isSearchExpanded);
        }
    };

    const hideElements = location.pathname === '/sign-in';

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsSearchExpanded(true);
            } else {
                setIsSearchExpanded(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='navbar-container'>
            <div className='navbar-title'>
                <a href='/'>
                    <img 
                        src={logo} 
                        width="23px" 
                        height="23px" 
                        alt='icon'                             
                    />
                </a>
                <a href='/'><h1>DEEBUG</h1></a>
            </div>
            {!hideElements && (
                <>
                    <div className={`search-container ${isSearchExpanded ? 'expanded' : ''}`}>
                        <img 
                            src={searchIcon} 
                            alt="Search" 
                            className="search-icon" 
                            onClick={toggleSearch} 
                            width="20px"
                            height="20px"
                        />
                        <input 
                            type="text" 
                            placeholder="What do you want to learn" 
                            className="search-input" 
                        />
                    </div>
                    <div className='profile-container'>
                        {isSignedIn ? (
                            <img
                                src={frame}
                                width="30px"
                                height="30px"
                                alt='icon'
                                onClick={openModal}
                                className="profile-icon"
                            />
                        ) : (
                            <Link to='/sign-in' className='nav-signin'>Sign in</Link>
                        )}
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Profile Modal"
                            className="navbar-modal"
                            overlayClassName="navbar-overlay"
                        >
                            <img
                                src={frame}
                                width="100px"
                                height="100px"
                                alt='profile'
                            />
                            <h1>Purpose Olikiabo</h1>
                            <h2>purposeolikiabo@gmail.com</h2>
                            <div className='profile-content'>
                                <p><a href='/profile'>Profile</a></p>
                                <p><a href='/my-certificates'>My certifications</a></p>
                                <p><a href='/saved-courses'>Saved courses</a></p>
                                <hr />
                                <p onClick={handleLogout} style={{ cursor: 'pointer' }}>Sign out</p>
                            </div>
                        </Modal>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
