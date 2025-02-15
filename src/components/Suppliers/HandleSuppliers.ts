import apiClient from '@/utils/apiClient';

export const getSuppliers = async () => {
  try {
    const response = await apiClient.get('/suppliers');
    response.data.data.forEach((supplier: any) => {
      supplier.createdAt = new Date(supplier.createdAt).toLocaleDateString();
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteSupplier = async (id: string) => {
  try {
    await apiClient.delete(`/suppliers/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const updateSupplier = async (id: string, data: any) => {
  try {
    await apiClient.put(`/suppliers/${id}`, data);
  } catch (error) {
    console.error(error);
  }
};

export const getSupplier = async (id: string) => {
  try {
    const response = await apiClient.get(`/suppliers/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
