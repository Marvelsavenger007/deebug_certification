import React from 'react'
import "./footer.css"
import world from "../images/world.png"
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

const Footer = () => {
  return (
    <div className='footer-ctn'>
        <div className='footer-props'>
            <div className='footer-top'>
                <img
                    src={world}
                    width="24px"
                    height="24px"
                    alt='world'
                />
                <h1>Nigeria</h1>
            </div>
            <div className='footer-bottom'>
                <div className='footer1'>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
                <div className='footer1'>
                    <p>© Deebug 2024</p>
                </div>
                <div className='footer-images'>
                    <img
                        src={facebook}
                        width="24px"
                        height="24px"
                        alt='icon'
                    />
                    <img
                        src={instagram}
                        width="24px"
                        height="24px"
                        alt='icon'
                    />
                    <img
                        src={linkedin}
                        width="24px"
                        height="24px"
                        alt='icon'
                    />
                    <img
                        src={twitter}
                        width="24px"
                        height="24px"
                        alt='icon'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer