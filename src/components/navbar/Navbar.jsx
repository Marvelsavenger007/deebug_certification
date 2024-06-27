// src/components/Navbar.js
import React, { useState } from 'react';
import logo from "../images/logo.png";
import "./navbar.css";
import Search from '../search/Search';
import Modal from "react-modal";
import check from '../images/checkcircle.png';

const Navbar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
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
            <div className='profile-container'>

                <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Registration Successful"
                    className="modal"
                    overlayClassName="overlay"
                >
                    <img
                        src={check}
                        width="50px"
                        height="50px"
                        alt='profile'
                    />
                    <h1>saint</h1>
                    <h2>thunderstorm@gmail.com</h2>
                    <div className='profile-content'>
                        <p>profile</p>
                        <p>my videos</p>
                        <p>my friends</p>
                        <hr />
                        <p>Logout</p>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Navbar;
