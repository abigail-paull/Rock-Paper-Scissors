import React from "react";
import profileImage from "./assets/vecteezy_portrait-of-a-beautiful-girl-face-side-view-wearing-a-flat_16127643-1.jpg";
import settings from "./assets/settings-svgrepo-com.svg";
import LightMode from "./LightMode";

const NavBar = () => {
  const handleProfileClick = () => {
    alert("Profile clicked! Navigate to profile page or show profile options.");
  };

  const handleSettingsClick = () => {
    alert("Settings clicked! Open settings menu or navigate to settings page.");
  };

  return (
    <>
    
    <section className="nav_bar">
      
      <img
        src={profileImage}
        alt="Profile"
        className="profile"
        onClick={handleProfileClick}
      />

<LightMode/>
      <img
        src={settings}
        alt="Settings"
        className="settings"
        onClick={handleSettingsClick}
      />
    </section>

    
    
    </>
  );
};

export default NavBar;






