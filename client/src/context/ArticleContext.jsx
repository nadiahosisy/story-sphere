import React, { createContext, useState, useEffect } from 'react';
import {
	addStory,
	getAllStories,
	getStory,
} from '../api/api';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
	const [stories, setStories] = useState([]);
	const [story, setStory] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchAllStories = async () => {
		try {
			const storiesData = await getAllStories();
			setStories(storiesData.data);
			setIsLoading(false);
		} catch (err) {
			setError(err.message);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchAllStories();
		console.log('fetched data on empty dependency arr');
	}, []);

	const addNewStory = async (articleData) => {
		try {
			await addStory(articleData);
			fetchAllStories();
		} catch (err) {
			setError(err.message);
		}
	};

	const getStoryById = async (articleId) => {
		try {
			const articleData = await getStory(articleId);
			setStory(articleData);
			setIsLoading(false);
		} catch (error) {
			setError(error.message);
			setIsLoading(false);
		}
	};

	const clearError = () => {
		setError(null);
	};

	return (
		<ArticleContext.Provider
			value={{
				stories,
				story,
				isLoading,
				error,
				addNewStory,
				getStoryById,
				clearError,
			}}>
			{children}
		</ArticleContext.Provider>
	);
};
