import React from 'react';
import klLogo from './kl_logo.jpg'; // Ensure the image is in the src folder

function Header() {
  return (
    <header>
      <img src={klLogo} alt="KL Logo" style={{ width: '50px', height: '50px' }} />
      <h1>KL University</h1>
      <h2>WELCOME TO THE COLLEGE</h2>
    </header>
  );
}

export default Header;
