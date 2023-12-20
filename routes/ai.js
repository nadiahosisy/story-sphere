const express = require('express');
const { createStory } = require('../controllers/ai');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/addStory', createStory);

module.exports = router;
