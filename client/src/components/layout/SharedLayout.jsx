import { Outlet } from 'react-router';
import Navbar from './Navbar';

import './style.css';
import Footer from './Footer';

const SharedLayout = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SharedLayout;
