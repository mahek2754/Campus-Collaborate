import React from 'react';
import './profilecss.css';

const Profile = () => {
  // Arrow function to handle the click event of the "Edit Profile" button
  const handleEditProfile = () => {
    alert('Edit profile functionality is triggered!');
    // Add your logic for editing the profile here
  };

  return (
    <div>
      <div className="header">
        <span className="material-icons">
          clear
        </span>
        <div className="header-text"> Campus Collaborate</div>
        <span className="material-icons">
          notifications_none
        </span>
        <span className="material-icons">
          add_box
        </span>
      </div>

      <div className="main">
        <div className="left-section">
          <img src="image.png" alt="Profile" className="profile-pic" />
          <div className="name">Ivansky King</div>
          <div className="buttons">
            <button id="edit-btn" onClick={handleEditProfile}>Edit Profile</button>
            <button id="add-btn">Add Projects</button>
            <button id="courses-btn">My Courses</button>
          </div>

          <button className="sign-out">Sign Out</button>
        </div>

        <div className="right-section">
          {/* Sample Collaborate Component */}
          <div className="collaborate">
            <img src="collaborate-img.jpeg" alt="Collaborate" className="collaborate-img" />
            <div style={{ color: 'white', fontFamily: 'Inter', marginLeft: '4%', fontSize: '2.6vh' }}>Campus Collaborate</div>
            <div className="details">
              <div style={{ color: '#B4B4B4', fontFamily: 'Inter', fontSize: '1.7vh' }}>Invansky King</div>
              <div className="views-div">
                <span className="material-icons">thumb_up</span>
                <div className="post-rating">Views</div>
                <span className="material-icons">thumb_down</span>
                <div className="post-rating">Views</div>
              </div>
            </div>
          </div>

          {/* You can add more Collaborate components here */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
