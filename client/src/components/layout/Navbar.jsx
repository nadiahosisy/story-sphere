import { Link } from 'react-router-dom';
import NavListItem from './NavListItem';

const Navbar = () => {
  const navListItems = [
    {
      to: '/',
      text: 'Home',
      className: null,
    },
    {
      to: '/about',
      text: 'About Us',
      className: null,
    },

    {
      to: '/contact',
      text: 'Contact Us',
      className: null,
    },
    {
      to: '/donate',
      text: 'Donate Now',
      className: 'btn login-btn',
    },
  ];

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-logo-container">
          <h2 className="navbar-logo">Story Sphere</h2>
        </div>
      </Link>
      <ul className="nav-links">
        {navListItems.map((link) => (
          <NavListItem key={link.text} {...link} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
