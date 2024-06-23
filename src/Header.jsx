import React from 'react';

const Header = ({ scrollToSection }) => {
  return (
    <header>
      <nav className="nav">
        <ul className="nav-items">
          <li onClick={() => scrollToSection('sustainability-section')}>Sustainability</li>
          <li onClick={() => scrollToSection('equity-section')}>Food Equity</li>
          <li onClick={() => scrollToSection('resources-section')}>Resources</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
