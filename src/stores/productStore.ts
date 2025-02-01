// use pinia to handle the product state
import { defineStore } from 'pinia';
import apiClient from '../utils/apiClient';
export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
  }),
  actions: {
    async getProducts() {
      try {
        const response = await apiClient.get('/products');
        this.products = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
