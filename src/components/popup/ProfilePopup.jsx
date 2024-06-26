import React from 'react'

const ProfilePopup = ({ user, onClose, onLogout }) => {
  return (
    <div className="profile-popup">
        <div className="profile-info">
            <img src={user.profilePicture} alt="Profile" />
            <div>
                <p>{user.fullName}</p>
                <p>{user.email}</p>
            </div>
        </div>
        <div className="profile-actions">
            <button>My Courses</button>
            <button>Certification</button>
            <button onClick={onLogout}>Sign Out</button>
        </div>
        <button onClick={onClose} className="close-button">
            Close
        </button>
    </div>
  )
}

export default ProfilePopup