import React from 'react';
import './BeforeLoginInNavbar.css'; // Import your CSS file
import '../../../src/index.css';

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        color: 'var(--white-color)',
        background: 'var(--secondary-color)',
      }}
    >
      <div className="FlexRow logo">
        <div>Logo</div>
        <div>StorySphere</div>
      </div>
      <div className="FlexRow right-section">
        <div>Discover Stories</div>
        <div>New Story</div>
        <div>My Stories</div>
        <div className="profile-picture"></div>
      </div>
    </nav>
  );
};

export default Navbar;
