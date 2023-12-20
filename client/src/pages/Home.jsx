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
        <div className="upper-content">
          <div className="picture-section"></div>
          <div className="text-section">
            <h1>Your Heading Here</h1>
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        </div>
        <div className="lower-content">jfjlkgfjlkgfjltrtytryt</div>
      </div>
    </section>
  );
};

export default Home;
