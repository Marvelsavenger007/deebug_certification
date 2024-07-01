import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import logo from "../images/logo.png";
import "./navbar.css";
import Search from '../search/Search';
import Modal from "react-modal";
import frame from '../images/profile.png';
Modal.setAppElement('#root');

const Navbar = ({ isSignedIn, setIsSignedIn }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
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

    const hideElements = location.pathname === '/SignIn';

    return (
        <div className='navbar-container'>
            <div className='navbar-title'>
                <img
                    src={logo}
                    width="23px"
                    height="23px"
                    alt='icon'
                />
                <h1>DEEBUG</h1>
            </div>
            {!hideElements && (
                <>
                    <div className='search-container'>
                        <Search />
                    </div>
                    <div className='profile-container'>
                        {isSignedIn ? (
                            <img
                                src={frame}
                                width="30px"
                                height="30px"
                                alt='icon'
                                onClick={openModal}
                            />
                        ) : (
                            <Link to='/SignIn' className='nav-signin'>Sign in</Link>
                        )}
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Registration Successful"
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
                                <p><a href='/Profile'>Profile</a></p>
                                <p><a href='/MyCertificates'>My certifications</a></p>
                                <p><a href='/'>Saved courses</a></p>
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
