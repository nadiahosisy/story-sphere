import { NavLink } from 'react-router-dom';
import { useGlobalShoeContext } from '../hooks';

import './style/Home.css';

const Home = () => {
  const { isLoading } = useGlobalShoeContext();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="home-container">
      <div className="content">
        <div className="picture-section">
          <div className="img"></div>
        </div>
        <div className="text-section">
          <h1>Start Creating Stories Now</h1>
          <div className="btn-container">
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
            <NavLink to="/register" className="btn">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
