import React, {useState} from 'react';
import "./certification.css";
import ribbon from "../images/ribbon.webp";
import green from "../images/greeninfo.png";


const MyCertificates = () => {
    const [hasCertificates] = useState(false);
    
    return (
        <div className='my-certificate-main'>
            <div className='my-certificate-top'>
                <h1>My Certifications</h1>
            </div>
            <div className='my-certificate-sub'>
            {!hasCertificates ? (
                <div className='empty-certificate'>
                    <img
                        src={ribbon}
                        width="100px"
                        height="150px"
                        alt='icon'
                    />
                    <p>Start learning a new skill</p>
                    <a href="/">Browse courses</a>
                </div>
            ) : (
                <div className='filled-certificates'>
                    <div className='certification-id'>
                        <p>Certification</p>
                        <h1>Deebug Institute Certified: Full Stack (MERN) Software Development</h1>
                        <div className='certification-congrats'>
                        <img
                            src={green}
                            width="18px"
                            height="18px"
                            alt='icon'
                        />
                        <p>Congratulations! You've successfully completed this course. Your certificate is now available to view and download.</p>
                        </div>
                        <button>View Certificate</button>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default MyCertificates

