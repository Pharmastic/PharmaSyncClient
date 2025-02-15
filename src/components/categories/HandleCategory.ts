import apiClient from '@/utils/apiClient';

export const getCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    response.data.data.forEach((category: any) => {
      category.createdAt = new Date(category.createdAt).toLocaleDateString();
    });
    console.log(response.data.data.createdAt);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCategory = async (id: string) => {
  try {
    await apiClient.delete(`/categories/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const updateCategory = async (id: string, data: any) => {
  try {
    await apiClient.put(`/categories/${id}`, data);
  } catch (error) {
    console.error(error);
  }
};

export const getCategory = async (id: string) => {
  try {
    const response = await apiClient.get(`/categories/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
