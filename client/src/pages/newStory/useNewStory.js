import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useGlobalArticleContext } from '../../hooks';

const useNewStory = () => {
	const navigate = useNavigate();
	const { addNewStory, error } = useGlobalArticleContext();

	const [story, setStory] = useState({
		title: '',
		subtitle: '',
		body: '',
		footer: '',
	});
	const [errors, setErrors] = useState({
		title: null,
		subtitle: null,
		body: null,
		footer: null,
	});

	const handleChange = (e) => {
		setStory({
			...story,
			[e.target.id]: e.target.value,
		});
		setErrors((prevState) => ({
			...prevState,
			[e.target.id]: null,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let isValid = true;
		const newErrors = {};

		const validationRules = [
			{
				field: 'title',
				test: (val) => val.length >= 10,
				errorMessage: 'title must be at least 10 characters long',
			},
			{
				field: 'subtitle',
				test: (val) => val.length >= 10,
				errorMessage: 'subtitle must be at least 10 characters long',
			},
			{
				field: 'body',
				test: (val) => val.length >= 100,
				errorMessage: 'body must be at least 100 characters long',
			},
			{
				field: 'footer',
				test: (val) => val.length >= 10,
				errorMessage: 'footer must be at least 10 characters long',
			},
		];

		validationRules.forEach(({ field, test, errorMessage }) => {
			if (!test(story[field])) {
				newErrors[field] = errorMessage;
				isValid = false;
			}
		});

		setErrors(newErrors);

		if (isValid) {
			addNewStory(story);
			if (error) {
				return error;
			}
			
			navigate('/admin/manageArticles');
		}
	};

	return {handleChange, handleSubmit, story, errors };
};

export default useNewStory;
