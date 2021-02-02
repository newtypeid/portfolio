import React from 'react';
import './Header.css';
import photo from '../img/test_photo.jpg'
function Header() {
  return (
    <div className="Header">
      <img className="photo" src={photo} alt="left"></img>
    </div>
  );
}

export default Header;
