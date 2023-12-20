import { Link } from 'react-router-dom';
import { useGlobalAuthContext } from '../../hooks';

import NavListItem from './NavListItem';

const Navbar = () => {
  const { user, loading, logout } = useGlobalAuthContext();

  const navListItems = [
    {
      to: '/',
      text: 'Home',
      condition: true,
    },
    {
      to: '/add',
      text: 'Add Shoe',
      condition: user && user.role === 'admin',
    },
  ];

  return <nav className="navbar">someting</nav>;
};

export default Navbar;
