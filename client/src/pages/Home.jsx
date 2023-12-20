import { useGlobalShoeContext } from '../hooks';

// import { ShoeCard } from '../components';

import './style/Home.css';

const Home = () => {
  // const { isLoading } = useGlobalShoeContext();

  // if (isLoading) {
  //   return <div className="loading">Loading...</div>;
  // }

  return (
    <section className="home-container">
      <div className="content">
        <div className="picture-section">
          <div className="img"></div>
        </div>
        <div className="text-section">
          <h1>Start Creating Stories Now</h1>
          <div className="btn-container">
            <button className="btn">Click To Login</button>
            <button className="btn">Click To Register</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
