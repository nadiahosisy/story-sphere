
import './style.css';
import Footer from './Footer';
import { Outlet } from 'react-router';
// import { Navbar } from './BeforeLoginInNavbar';
import Navbar from './Navbar';

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
