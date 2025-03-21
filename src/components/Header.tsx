import React from 'react';
import './Header.css';

const Header = () => {
  const navItems = [
    { path: '/create/animal', label: 'Animal' },
    { path: '/create/location', label: 'Location' },
    { path: '/create/event', label: 'Event' },
    { path: '/delete', label: 'Animal kill' },
  ];

  return (
    <header className="header">
      <nav className="nav-container">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <button 
                className={`nav-button ${window.location.pathname === item.path ? 'nav-button-active' : ''}`}
                onClick={() => window.location.href = item.path}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;