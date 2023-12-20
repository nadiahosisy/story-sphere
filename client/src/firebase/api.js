import axios from "axios";

// Base URL for the API
const BASE_URL = "http://localhost:5000/api/v1/stories";

export const getAllArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error(`Error during getAllArticles: ${error}`);
    return [];
  }
};

export const getNonArchiveArticles = async () => {
  // Assuming you have a way to filter non-archive articles in your API
  try {
    const response = await axios.get(`${BASE_URL}?isArchive=false`);
    return response.data;
  } catch (error) {
    console.error(`Error during getNonArchiveArticles: ${error}`);
    return [];
  }
};

export const getArticle = async (articleId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${articleId}`);
    return response.data;
  } catch (error) {
    console.error(`Error during getArticle: ${error}`);
    return null;
  }
};

export const toggleIsArchive = async (article) => {
  // Assuming your API has a way to handle this operation
  try {
    const response = await axios.put(`${BASE_URL}/${article.id}`, {
      ...article,
      isArchive: !article.isArchive,
    });
    return response.data;
  } catch (error) {
    console.error(`Error during toggleIsArchive: ${error}`);
  }
};

export const addArticle = async (data) => {
  try {
    const response = await axios.post(BASE_URL, data);
    return response.data;
  } catch (error) {
    console.error(`Error during addArticle: ${error}`);
  }
};
