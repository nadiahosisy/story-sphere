// import functionCalling from './functionCalling.js';
// config({ path: './', silent: true });
// import getOpenAiInstance from '../../../story-sphere/config/openai.js/index.js';

// const app = express();

// dotenv.config();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

const ErrorResponse = require('../utils/errorResponse');
const Story = require('../models/Story');
const asyncHandler = require('../middleware/async');
const getOpenAiInstance = require('../config/openai');

//@desc       Create new story
//@route      POST /api/vi/stories
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

// app.post('/generate-text', async (req, res) => {
// 	const prompt = req.body.prompt;
// 	const openai = getOpenAiInstance();
// 	try {
// 		const completion = await openai.completions.create({
// 			// gpt-3.5-turbo-instruct
// 			model: 'gpt-3.5-turbo-instruct',
// 			prompt: prompt,
// 			max_tokens: 500,
// 			// temperature: 1,
// 			// stop: ":",
// 			// presence_penalty: 2,
// 			// seed: 42,
// 			// n: 2,
// 		});

// 		const text = completion.choices[0].text;
// 		res.send(text);
// 	} catch (error) {
// 		res.status(500).send('Error generating text');
// 	}
// });

// app.post('/generate-stream-text', async (req, res) => {
// 	const openai = getOpenAiInstance();
// 	try {
// 		const stream = await openai.chat.completions.create({
// 			model: 'gpt-3.5-turbo',
// 			max_tokens: 100,
// 			messages: [
// 				{ role: 'system', content: 'reply in bullet points when ever you can' },
// 				{ role: 'user', content: req.body.prompt },
// 			],
// 			stream: true,
// 		});

// 		res.header('Content-Type', 'text/plain');
// 		for await (const chunk of stream) {
// 			const content = chunk.choices[0]?.delta?.content || '';
// 			res.write(content);
// 		}
// 		res.end();
// 	} catch (e) {
// 		res.status(500).send('Error generating stream text');
// 	}
// });

// app.get('/generate-json', async (req, res) => {
// 	const openai = getOpenAiInstance();

// 	const completion = await openai.chat.completions.create({
// 		model: 'gpt-3.5-turbo-1106',
// 		messages: [
// 			{
// 				role: 'system',
// 				content:
// 					'Give me the question, the topic, the answer and the source of questions I ask you. Provide it in JSON format',
// 			},
// 			{ role: 'user', content: 'Who won the world series in 2020?' },
// 		],
// 		model: 'gpt-3.5-turbo-1106',
// 		seed: 50,
// 		response_format: { type: 'json_object' },
// 	});

// 	const result = completion.choices[0].message.content;
// 	res.send(result);
// });

// app.get('/chat-analysis', async (req, res) => {
// 	const bookFlight = async (bookingDetails) => {
// 		return { data: 'I booked the flight for you.' };
// 	};

// 	try {
// 		const bookingDetails = await functionCalling();

// 		if (bookingDetails) {
// 			const result = await bookFlight(bookingDetails);
// 			res.json(result);
// 		}
// 	} catch (error) {
// 		res.status(500).send('Error generating text');
// 	}
// });
