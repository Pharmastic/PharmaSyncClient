<script setup lang="ts">
import { useProductStore } from '@/stores/productStore';

const productStore = useProductStore();
const products = productStore.getProducts();
</script>

<template>
  <main
    class="bg-white w-full flex flex-col px-8 md:px-12 lg:px-24 items-center justify-center gap-8 md:gap-24"
  ></main>
</template>
