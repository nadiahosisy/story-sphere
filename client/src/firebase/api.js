import axios from "axios";

export const getAllArticles = async () => {
  try {
    const response = await axios.get("/api/v1/stories");
    return response.data;
  } catch (error) {
    console.error(`Error during getAllArticles: ${error}`);
    return [];
  }
};

export const getNonArchiveArticles = async () => {
  // Assuming you have a way to filter non-archive articles in your API
  try {
    const response = await axios.get("/api/v1/stories?isArchive=false");
    return response.data;
  } catch (error) {
    console.error(`Error during getNonArchiveArticles: ${error}`);
    return [];
  }
};

export const getArticle = async (articleId) => {
  try {
    const response = await axios.get(`/api/v1/stories/${articleId}`);
    return response.data;
  } catch (error) {
    console.error(`Error during getArticle: ${error}`);
    return null;
  }
};

export const toggleIsArchive = async (article) => {
  // Assuming your API has a way to handle this operation
  try {
    const response = await axios.put(`/api/v1/stories/${article.id}`, {
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
    const response = await axios.post("/api/v1/stories", data);
    return response.data;
  } catch (error) {
    console.error(`Error during addArticle: ${error}`);
  }
};
