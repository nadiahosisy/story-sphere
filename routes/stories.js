const express = require('express');

const {
	getStory,
	getStories,
	// updateStory,
	deleteStory,
	createStory,
} = require('../controllers/stories');

const Story = require('../models/Story');

//Include other resource routers
const reviewsRouter = require("./reviews");
const router = express.Router();

const advancedResults = require('../middleware/advancedResult');

const { protect, authorize } = require('../middleware/auth');

//Re-route into other resource routers
router.use("/:bootcampId/reviews", reviewsRouter);

router
  .route("/")
  .post(protect, authorize("publisher", "admin"), createStory);
router
	.route('/:id')
	.get(getStory)
	.get(getStories)
	// .put(protect, authorize('publisher', 'admin'), updateStory)
	.delete(protect, authorize('publisher', 'admin'), deleteStory);

module.exports = router;
