import React from 'react';
import "./certification.css";
import ribbon from "../images/ribbon.webp";

const CertificationRenewal = () => {
  return (
    <div className='certification-main'>
        <div className='certify-top'>
            <div className='certify-text'>
                <p>Deebug Certification Renewal</p>
                <h1>Stay ahead of the curve</h1>
                <h2>
                    Renew your Deebug certification annually for free 
                    to stay relevant, validate your expertise, and 
                    advance your career.
                </h2>
                <button>See your certifications</button>
            </div>
            <div className='certify-image'>
                <img
                    src={ribbon}
                    width="500px"
                    height="580px"
                    alt='ribbon'
                />
            </div>
        </div>
        <div className='certification-props'>
            <h1>Renewing your certificate is easy</h1>
            <div className='renew-certificate'>
                <div className='renew-props'>
                    <h1>Renewal is free</h1>
                    <p>
                        Renewing your certification is completely free, you 
                        just have to make sure you pass the online assessment 
                        before your certification expires.
                    </p>
                </div>
                <div className='renew-props'>
                    <h1>One-year renewal window</h1>
                    <p>
                        You can take the renewal assessment when its time for 
                        the assessment during your one year eligibility window. 
                        Once you pass, your certification will be extended one 
                        year from the expiration date.
                    </p>
                </div>
                <div className='renew-props'>
                    <h1>Take examination</h1>
                    <p>
                        The exam is designed to be concise and focuses on the latest 
                        trends in your field.  This ensures your expertise remains 
                        relevant and in-demand.
                    </p>
                </div>
            </div>
            <h1>Stay Deebug certified</h1>
            <p>Renew your certificate in three easy steps</p>
            <div className='deebug-certified'>
                <div className='deebug-cert-props'>
                    <h1>1</h1>
                    <p>Apply for the examination online through the website on the particular course you are interested in</p>
                </div>
                <div className='deebug-cert-props'>
                    <h1>2</h1>
                    <p>Review and refresh your knowledge on key concepts to help you prepare before taking the examination.</p>
                </div>
                <div className='deebug-cert-props'>
                    <h1>3</h1>
                    <p>Pass the exam to get your deebug certification renewed before it expires.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CertificationRenewal