<script setup lang="ts">
import { useRouter } from 'vue-router';
import logOut from '../utils/logOut';
import AddCategory from '@/components/categories/AddCategory.vue';
import AddSuppliers from '@/components/Suppliers/AddSuppliers.vue';
const router = useRouter();

const login = () => {
  router.push('/login');
};

const signup = () => {
  router.push('/signup');
};

const addProduct = () => {
  router.push('/add-product');
};
const productsPage = () => {
  router.push('/products');
};
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold mb-4">Home</h1>
    <div class="flex flex-col items-center justify-center gap-4">
      <button @click="logOut" class="bg-blue-500 text-white py-2 px-4 rounded mb-2">LogOut</button>
      <button @click="login" class="bg-green-500 text-white py-2 px-4 rounded mb-2">Login</button>
      <button @click="signup" class="bg-purple-500 text-white py-2 px-4 rounded">Signup</button
      ><button @click="addProduct" class="bg-red-500 text-white py-2 px-4 rounded">
        Add Product
      </button>
      <button @click="productsPage">Products</button>
      <div class="flex items-center justify-center gap-4 w-full">
        <AddCategory />
        <AddSuppliers />
      </div>
    </div>
  </main>
</template>
