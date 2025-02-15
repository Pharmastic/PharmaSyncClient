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
  <main class="bg-white w-full flex flex-col items-center justify-center">
    <form
      @submit.prevent="onSubmit"
      class="flex flex-col gap-2 items-left justify-center w-full sm:flex-row"
    >
      <TextField name="name" label="Name" type="text" required />
      <TextField name="description" label="Description" type="text" required />
      <button
        class="bg-primary-400 w-1/2 sm:w-3/5 lg:w-1/3 mt-4 md:mt-6 hover:bg-primary-600 transition-colors text-white py-2 sm:py-1 px-4 rounded"
      >
        {{ isSubmitting ? 'Adding Category...' : 'Add Category' }}
      </button>
    </form>
  </main>
</template>
