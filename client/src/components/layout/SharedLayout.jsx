
import './style.css';
import Footer from './Footer';
import { Outlet } from 'react-router';

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
