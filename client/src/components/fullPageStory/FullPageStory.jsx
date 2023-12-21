import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalArticleContext } from "../../hooks";
import './FullPageStory.css';

const FullPageStory = () => {
  const { storyId } = useParams();
  const { getStoryById, story, isLoading } = useGlobalArticleContext();

  useEffect(() => {
		getStoryById(storyId);
	}, [storyId]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className='full-story-container'>
      <Link to='/stories' className="full-story-back-link">Back To All Stories</Link>
      {story && (
        <div className="story-container">
          <h2 className="story-name">{story.title}</h2>
          <h3 className="story-subTitle">{story.subtitle}</h3>
          <img className="story-img" src={story.img} alt="story-img" />
          <p className="story-text">{`${story.body}`}</p>
          <h5 className="story-footer">{`${story.footer}`}</h5>
        </div>
      )}
    </section>
  );
};

export default FullPageStory;
