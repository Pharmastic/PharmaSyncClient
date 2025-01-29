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
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold mb-4">Home</h1>
    <div class="flex gap-4">
      <button @click="logOut" class="bg-blue-500 text-white py-2 px-4 rounded mb-2">LogOut</button>
      <button @click="login" class="bg-green-500 text-white py-2 px-4 rounded mb-2">Login</button>
      <button @click="signup" class="bg-purple-500 text-white py-2 px-4 rounded">Signup</button>
      <button @click="addProduct" class="bg-red-500 text-white py-2 px-4 rounded">
        Add Product
      </button>
    </div>
  </main>
</template>
