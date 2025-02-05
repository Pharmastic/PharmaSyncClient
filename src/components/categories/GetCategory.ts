import apiClient from '@/utils/apiClient';

const getCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export default getCategories;
