import './Story.css';

const Story = ({ handleStoryClick, ...story }) => {
	const trimText = (text) => {
		const trimmedText = text.substring(0, 200);
		return (
			trimmedText.substring(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(' '))) + ' ...'
		);
	};

  console.log(story)

	return (
		<section className="single-story-container">
			<main onClick={() => handleStoryClick(story)}>
				<div className="single-story-text">
					<h2>{story.name}</h2>
					<p>{trimText(story.text)}</p>
				</div>
			</main>
		</section>
	);
};

export default Story;
