const express = require('express');

const {
	getStory,
	getStories,
	deleteStory,
} = require('../controllers/stories');
const { createStory } = require('../controllers/ai');

const Story = require('../models/Story');

//Include other resource routers
const reviewsRouter = require("./reviews");
const router = express.Router();

const advancedResults = require('../middleware/advancedResult');

const { protect } = require('../middleware/auth');

//Re-route into other resource routers
router.use("/:bootcampId/reviews", reviewsRouter);

router
  .route("/")
  .post( 
	// authorize("publisher", "admin"), 
	createStory)
	.get(getStories)
router
	.route('/:id')
	.get(getStory)
	.delete(protect, 
		// authorize('publisher'),
		 deleteStory);

module.exports = router;
