import React, {useState} from 'react';
import "../login/signin.css";
import check from "../images/check.png"
import profile from "../images/profile.png";
import yellow from "../images/yellowinfo.png";


const Profile = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [isFullNameFocused, setIsFullNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [isCountryFocused, setIsCountryFocused] = useState(false);
    const [isStateFocused, setIsStateFocused] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [profileUpdated, setProfileUpdated] = useState(false);
    const [formData, setFormData] = useState({
        fullname: 'Purpose Olikiabo-Osagie',
        email: 'Olikiabopurosa@gmail.com',
        phone: '08076543890',
        country: 'Nigeria',
        state: 'Edo state',
        gender: 'Female'
    });

    const handleFocus = (setter) => {
        setter(true);
    };

    const handleBlur = (setter) => {
        setter(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
        window.location.href = "/";
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileImage(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };

    const handleChangePicture = () => {
        document.getElementById('fileInput').click();
    };


    return (
        <div className='signin-main-container'>
            <div className='profile-top'>
                <img
                    src={profileImage || profile} // Use a default image if no image is uploaded
                    width="160px"
                    height="160px"
                    alt="icon"
                />
                    <button onClick={handleChangePicture}>Change Picture</button>
                <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                />
                <h1>Purpose Olikiabo</h1>
                <p>purposeolikiabo@gmail.com</p>
            </div>
            <div className="signin-parent">
                <div className='profile-warning'>
                    <img
                        src={yellow}
                        width="40px"
                        height="40px"
                        alt='warning'
                    />
                    <p>
                        Your name below must match the first name and last name as 
                        it appears on the ID you will present for exam check-in. If 
                        they do not match, you will not be able to take your exam and 
                        your exam fee will not be refunded.
                    </p>
                </div>
                {profileUpdated && (
                    <div className="profile-updated">
                        <img
                            src={check}
                            width="22px"
                            height="22px"
                            alt='edit'
                        />
                        Profile updated
                    </div>
                )}
                {isEditable ? (
                    <div>
                        <form className='profile-form'>
                            <div className='signin-input-container'>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    placeholder=''
                                    className={`signin-input ${isFullNameFocused || formData.fullname ? 'not-empty' : ''}`}
                                    onFocus={() => handleFocus(setIsFullNameFocused)}
                                    onBlur={() => handleBlur(setIsFullNameFocused)}
                                    value={formData.fullname}
                                    onChange={handleChange}
                                />
                                <label className='placeholder-label'>Full Name</label>
                            </div>
                            <div className='signin-input-container'>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder=''
                                    className={`signin-input ${isEmailFocused || formData.email ? 'not-empty' : ''}`}
                                    onFocus={() => handleFocus(setIsEmailFocused)}
                                    onBlur={() => handleBlur(setIsEmailFocused)}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label className='placeholder-label'>Email</label>
                            </div>
                            <div className='signin-input-container'>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder=''
                                    className={`signin-input ${isPhoneFocused || formData.phone ? 'not-empty' : ''}`}
                                    onFocus={() => handleFocus(setIsPhoneFocused)}
                                    onBlur={() => handleBlur(setIsPhoneFocused)}
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <label className='placeholder-label'>Phone Number</label>
                            </div>
                            <div className='signin-input-container'>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    placeholder=''
                                    className={`signin-input ${isCountryFocused || formData.country ? 'not-empty' : ''}`}
                                    onFocus={() => handleFocus(setIsCountryFocused)}
                                    onBlur={() => handleBlur(setIsCountryFocused)}
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                                <label className='placeholder-label'>Country</label>
                            </div>
                            <div className='signin-input-container'>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    placeholder=''
                                    className={`signin-input ${isStateFocused || formData.state ? 'not-empty' : ''}`}
                                    onFocus={() => handleFocus(setIsStateFocused)}
                                    onBlur={() => handleBlur(setIsStateFocused)}
                                    value={formData.state}
                                    onChange={handleChange}
                                />
                                <label className='placeholder-label'>State</label>
                            </div>
                            <select
                                id="gender"
                                name="gender"
                                className='registration-multiple-input1'
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
                        <div className='profile-non-edit'>
                            <h1>Personal Information</h1>
                            <button className='edit-profile-btn1' onClick={handleEditClick}>
                                Edit
                            </button>
                        </div>
                        <div className='non-editable-form'>
                            <div className='registration-form1'>
                                <div className='fixed-input-container'>
                                    <p className='registration-input1'>{formData.fullname}</p>
                                    <label className='placeholder-label1'>Full name</label>
                                </div>                    
                                <div className='fixed-input-container'>
                                    <p className='registration-input1'>{formData.email}</p>
                                    <label className='placeholder-label1'>Email</label>
                                </div>                    
                                <div className='fixed-input-container'>
                                    <p className='registration-input1'>{formData.phone}</p>
                                    <label className='placeholder-label1'>Phone number</label>
                                </div>                       
                                <h1>Other Information</h1>
                                <div className='fixed-input-container'>
                                    <p className='registration-input1'>{formData.country}</p>
                                    <label className='placeholder-label1'>Country</label>
                                </div>
                                <div className='fixed-input-container'>
                                    <p className='registration-input1'>{formData.state}</p>
                                    <label className='placeholder-label1'>State</label>
                                </div>
                                <div className='fixed-input-container'>
                                    <p className='registration-input1'>{formData.gender}</p>
                                    <label className='placeholder-label1'>Gender</label>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};  

export default Profile







