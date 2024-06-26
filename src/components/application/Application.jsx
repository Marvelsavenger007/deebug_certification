import React, {useState} from 'react';
import "./apply.css";
import info from "../images/infocircle.png"
import Modal from 'react-modal';
import {useNavigate} from "react-router-dom";
import check from "../images/checkcircle.png";

const Application = () => {
    const [currentStage, setCurrentStage] = useState(1);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate();
      
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
            1: 'Please enter your details',
            2: 'Please enter course details',
            3: 'Please confirm your entry',
          };
        
      
  const data = [
    { Course: 'Fullstack (MERN) Software Development', mode: 'Onsite', fee: '₦75,000' },
  ]
  

  return (
    <div className='form-main-container'>
        <div className="form-container">
            <h1>Course Application</h1>
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
                {currentStage === 1 && <div>
                <div className="form-warning">
                    <img
                        src={info}
                        width="24px"
                        height="24px"
                        alt='warning'
                    />
                    <p>Please we encourage you to use a personal email address that is unlikely to change</p>
                </div>
                    <form className='registration-form'>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder='Full name'
                            className='registration-input'
                        />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder='email'
                            className='registration-input'
                        />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder='Phone number'
                            className='registration-input'
                        />
                        <input
                            type="text"
                            id="country"
                            name="country"
                            placeholder='Country'
                            className='registration-input'
                        />
                        <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder='State'
                            className='registration-input'
                        />
                        <select
                            id="gender"
                            name="gender"
                            className='registration-multiple-input'
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </form>
                </div>}
                {currentStage === 2 && <div>
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
                </div>}
                {currentStage === 3 && <div>
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
                </div>}
            </div>
            <div className="registration-btns">
                <button className='register-btn' onClick={nextStage}>
                    {currentStage < 3 ? 'Continue' : 'Submit'}
                </button>
                <button className='register-btn' onClick={prevStage} disabled={currentStage === 1}>
                    Back
                </button>
            </div>
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
  )
}


export default Application