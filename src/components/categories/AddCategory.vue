<script setup>
import apiClient from '@/utils/apiClient';
import { useForm } from '@formwerk/core';
import { categorySchema } from '@/validation/categorySchema';
import TextField from '@/components/UI/TextField.vue';

const { values, handleSubmit, isSubmitting } = useForm({ schema: categorySchema });

const onSubmit = handleSubmit(async (data) => {
  try {
    const response = await apiClient.post('/categories', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <main
    class="bg-white w-full flex flex-col px-8 md:px-12 lg:px-24 items-center justify-center gap-8 md:gap-24"
  >
    <h1 class="text-3xl text-primary-500 text-center font-bold">Add Category</h1>
    <form
      @submit.prevent="onSubmit"
      class="flex flex-col gap-2 items-center justify-center w-full md:w-1/3"
    >
      <TextField name="name" label="Name" type="text" required />
      <TextField name="description" label="Description" type="text" required />
      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Adding Category...' : 'Add Category' }}
      </button>
    </form>
  </main>
</template>
