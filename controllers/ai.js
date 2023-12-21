const ErrorResponse = require('../utils/errorResponse');
const Story = require('../models/Story');
const asyncHandler = require('../middleware/async');
const getOpenAiInstance = require('../config/openai');

//@desc       Create new story
//@route      POST /api/v1/stories
//@access     Private
exports.createStory = asyncHandler(async (req, res, next) => {
    const prompt = req.body.name;
	const openai = getOpenAiInstance();

	try {
		const completion = await openai.completions.create({
			model: 'gpt-3.5-turbo-instruct',
			prompt: prompt,
			max_tokens: 500,
			// temperature: 1,
			// presence_penalty: 2,
			// n: 2,
			});

			const text = completion.choices[0].text;
            console.log(text);
			res.send(text);
		} catch (error) {
			res.status(500).send('Error generating text');
		}

  // Add user to req,body
  req.body.user = req.user.id;

  const story = await Story.create(req.body);

  res.status(201).json({
    success: true,
    data: story,
  });
});
