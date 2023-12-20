// Story.js
import React, { useEffect, useState } from 'react';

// Sample data for kids' stories
const sampleStories = [
  {
    id: 1,
    title: 'The Magical Adventure',
    content:
      'Once upon a time, in a magical land far, far away, there lived a curious little creature named Sparkle. Sparkle embarked on an exciting adventure filled with enchanting creatures and hidden treasures.',
  },
  {
    id: 2,
    title: 'The Friendly Dragon',
    content:
      'In a cozy village nestled between rolling hills, a friendly dragon named Puff befriended the children. Together, they discovered the joy of friendship and the importance of kindness.',
  },
  {
    id: 3,
    title: 'The Rainbow Unicorn',
    content:
      'Meet Twinkle, the rainbow unicorn who brought color and joy wherever she went. Join Twinkle on a magical journey through meadows and forests as she spreads happiness to all.',
  },
];

const Story = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // You can replace this with an API call or use the sample data
    setStories(sampleStories);
  }, []);

  return (
    <div className="story-container">
      {stories.map((story) => (
        <div key={story.id} className="story-card">
          <h2 className="story-title">{story.title}</h2>
          <p className="story-content">{story.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Story;
