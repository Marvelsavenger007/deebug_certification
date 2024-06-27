import React, { useState } from 'react';
import './apply.css';
import edit from '../images/edit.jpg';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import check from '../images/checkcircle.png';

const ExamApplication = () => {
    const [currentStage, setCurrentStage] = useState(1);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate();
    const [isEditable, setIsEditable] = useState(false);
    const [formData, setFormData] = useState({
        fullname: 'Purpose Olikiabo-Osagie',
        email: 'Olikiabopurosa@gmail.com',
        phone: '08076543890',
        country: 'Nigeria',
        state: 'Edo state',
        gender: 'Female'
    });
    const [profileUpdated, setProfileUpdated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleEditClick = () => {
        setIsEditable(true);
        setProfileUpdated(false);
    };

    const handleCancelClick = () => {
        setIsEditable(false);
    };

    const handleUpdateClick = () => {
        setIsEditable(false);
        setProfileUpdated(true);
    };

    const nextStage = () => {
        if (currentStage < 3) {
            setCurrentStage(currentStage + 1);
        } else {
            setModalIsOpen(true);
        }
    };

    const prevStage = () => {
        if (currentStage > 1) {
            setCurrentStage(currentStage - 1);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const getStageClass = (stage) => {
        if (stage === currentStage) {
            return 'stage active';
        } else if (stage < currentStage) {
            return 'stage completed';
        } else {
            return 'stage';
        }
    };

    const stageDescriptions = {
        1: 'Please verify all information are correct and up-to-date',
        2: 'Please confirm course',
        3: 'Please confirm your entry',
    };

    const data = [
        { Course: 'Fullstack (MERN) Software Development', mode: 'Onsite', fee: '₦75,000' },
    ];

    return (
        <div className='form-main-container'>
            <div className="form-container">
                <h1>Certification Exam</h1>
                <p>{stageDescriptions[currentStage]}</p>
                <div className="stages">
                    <div className={getStageClass(1)}>
                        <p className='registration-step'>Step 1</p>
                        <div className="bar"></div>
                    </div>
                    <div className={getStageClass(2)}>
                        <p className='registration-step'>Step 2</p>
                        <div className="bar"></div>
                    </div>
                    <div className={getStageClass(3)}>
                        <p className='registration-step'>Step 3</p>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="form-content">
                    {currentStage === 1 && (
                        <div>
                            <div className="edit-profile-container">
                                {profileUpdated && (
                                    <p className="profile-updated">
                                        <img
                                            src={check}
                                            width="22px"
                                            height="22px"
                                            alt='edit'
                                        />
                                        Profile updated
                                    </p>
                                )}
                                {isEditable ? (
                                    <div>
                                        <form className='registration-form'>
                                            <input
                                                type="text"
                                                id="fullname"
                                                name="fullname"
                                                placeholder='Full name'
                                                className='registration-input'
                                                value={formData.fullname}
                                                onChange={handleChange}
                                            />
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder='Email'
                                                className='registration-input'
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder='Phone number'
                                                className='registration-input'
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            <input
                                                type="text"
                                                id="country"
                                                name="country"
                                                placeholder='Country'
                                                className='registration-input'
                                                value={formData.country}
                                                onChange={handleChange}
                                            />
                                            <input
                                                type="text"
                                                id="state"
                                                name="state"
                                                placeholder='State'
                                                className='registration-input'
                                                value={formData.state}
                                                onChange={handleChange}
                                            />
                                            <select
                                                id="gender"
                                                name="gender"
                                                className='registration-multiple-input'
                                                value={formData.gender}
                                                onChange={handleChange}
                                            >
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </form>
                                        <div className='registration-btns1'>
                                            <button className='register-btn1' onClick={handleCancelClick}>Cancel</button>
                                            <button className='register-btn' onClick={handleUpdateClick}>Update</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <button className='edit-profile-btn' onClick={handleEditClick}>
                                            <img
                                                src={edit}
                                                width="22px"
                                                height="22px"
                                                alt='edit'
                                            />
                                            Edit Profile
                                        </button>
                                        <div className='non-editable-form'>
                                            <div className='registration-form'>
                                                <p className='registration-input'>{formData.fullname}</p>
                                                <p className='registration-input'>{formData.email}</p>
                                                <p className='registration-input'>{formData.phone}</p>
                                                <p className='registration-input'>{formData.country}</p>
                                                <p className='registration-input'>{formData.state}</p>
                                                <p className='registration-input'>{formData.gender}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    {currentStage === 2 && (
                        <div>
                            <form className='registration-form'>
                                <select
                                    id="courses"
                                    name="courses"
                                    className='registration-multiple-input'
                                >
                                    <option value="frontend">Full Stack (MERN) Software Development</option>
                                    <option value="backend">Backend (NodeJS & Express) Software Developer</option>
                                    <option value="mobileapp">Frontend (ReactJS) Software Developer</option>
                                    <option value="uiux">UX Design</option>
                                    <option value="embedded">UI Design</option>
                                    <option value="fullstackweb">Complete Mobile Application Developer</option>
                                    <option value="fullstackmobile">Flutter Application Developer</option>
                                    <option value="fullstackproduct">Android Developer</option>
                                    <option value="fullstackproduct">iOS Developer</option>
                                </select>
                                <select
                                    id="gender"
                                    name="gender"
                                    className='registration-multiple-input'
                                >
                                    <option value="site">Onsite</option>
                                </select>
                            </form>
                        </div>
                    )}
                    {currentStage === 3 && (
                        <div>
                            <div className='register-final-details'>
                                <table className="register-table">
                                    <thead>
                                        <tr>
                                            <th>Course</th>
                                            <th>Learning Mode</th>
                                            <th>Course fee</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.Course}</td>
                                                <td>{row.mode}</td>
                                                <td>{row.fee}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className='register-price-details'>
                                    <hr className='register-hr' />
                                    <div className='register-price'>
                                        <p>Total Course Fee</p>
                                        <p>&#8358;150,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {!isEditable && (
                    <div className="registration-btns">
                        <button className='register-btn' onClick={nextStage}>
                            {currentStage < 3 ? 'Continue' : 'Submit'}
                        </button>
                        <button className='register-btn' onClick={prevStage} disabled={currentStage === 1}>
                            Back
                        </button>
                    </div>
                )}
                <Modal  
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Registration Successful"
                    className="modal"
                    overlayClassName="overlay"
                >
                    <img
                        src={check}
                        width="100px"
                        height="100px"
                        alt='congratulations'
                    />
                    <h2>Application Successful</h2>
                    <p>Your application has been submitted. You'll receive a confirmation email with your login details shortly.</p>
                    <button className='register-finish-btn' onClick={() => navigate("/")}>Continue</button>
                </Modal>
            </div>
        </div>
    );
};

export default ExamApplication;
