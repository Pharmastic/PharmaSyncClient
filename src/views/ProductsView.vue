<script setup lang="ts">
import apiClient from '@/utils/apiClient';
import { ref, computed, onMounted, onUnmounted } from 'vue';

const products = ref([]);
const isLoading = ref(true);
const windowWidth = ref(window.innerWidth);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const fetchProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    products.value = response.data.data;
    products.value.forEach((product) => {
      product.expiryDate = new Date(product.expiryDate).toLocaleDateString();
    });
  } catch (error) {
    console.error(error);
  }
};

fetchProducts();
setTimeout(() => {
  isLoading.value = false;
}, 3000);

// Responsive headers based on screen width
const headers = computed(() => {
  const baseHeaders = [
    { title: 'Name', value: 'name' },
    { title: 'Category', value: 'category.name' },
    { title: 'Supplier', value: 'supplier.name' },
    { title: 'Price', value: 'price' },
  ];
  if (windowWidth.value >= 768) {
    baseHeaders.push(
      { title: 'Cost Price', value: 'costPrice' },
      { title: 'Quantity', value: 'quantity' },
      { title: 'Status', value: 'status' },
    );
  }

  if (windowWidth.value >= 1024) {
    baseHeaders.push(
      { title: 'Strength', value: 'strength' },
      { title: 'Storage', value: 'storage' },
      { title: 'Dosage Form', value: 'dosageForm' },
    );
  }

  if (windowWidth.value >= 1280) {
    baseHeaders.push(
      { title: 'Manufacturer', value: 'manufacturer' },
      { title: 'Expiry Date', value: 'expiryDate' },
      { title: 'Barcode', value: 'barcode' },
      { title: 'Batch Number', value: 'batchNumber' },
      { title: 'SKU', value: 'sku' },
      { title: 'Description', value: 'description' },
    );
  }

  return baseHeaders;
});
</script>

<template>
  <main
    class="bg-white w-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 items-center justify-center gap-8 md:gap-24"
  >
    <div v-if="isLoading" class="flex flex-col gap-8 items-center justify-center my-24 md:my-48">
      <img src="../assets/icons8-dots-loading.gif" alt="loading" />
      <h1 class="text-primary-500 font-italic text-xl md:text-3xl">
        Take a deep breath, we are loading your products...
      </h1>
    </div>
    <div class="flex flex-col gap-8 w-full" v-else>
      <h1 class="text-2xl md:text-3xl font-bold">Products</h1>
      <v-data-table
        :headers="headers"
        :items="products"
        :server-items-length="products.length"
        item-key="id"
        class="elevation-4"
      ></v-data-table>
    </div>
  </main>
</template>
