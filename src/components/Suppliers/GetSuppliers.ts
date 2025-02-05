import apiClient from '@/utils/apiClient';

const getSuppliers = async () => {
  try {
    const response = await apiClient.get('/suppliers');
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export default getSuppliers;
