<script setup lang="ts">
import { useRouter } from 'vue-router';
import logOut from '../utils/logOut';
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
const categoriesPage = () => {
  router.push('/categories');
};

const suppliersPage = () => {
  router.push('/suppliers');
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
      <button @click="categoriesPage">Categories</button>
      <button @click="suppliersPage">Suppliers</button>
      <button @click="productsPage">Products</button>
    </div>
  </main>
</template>
