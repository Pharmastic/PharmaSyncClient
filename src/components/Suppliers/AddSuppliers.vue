<script setup lang="ts">
import apiClient from '@/utils/apiClient';
import { useForm } from '@formwerk/core';
import { SuppliersSchema } from '@/validation/suppliersSchema';
import TextField from '@/components/UI/TextField.vue';

const { values, handleSubmit, isSubmitting } = useForm({ schema: SuppliersSchema });

const onSubmit = handleSubmit(async (data) => {
  try {
    const response = await apiClient.post('/suppliers', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <main class="bg-white w-full flex flex-col items-center justify-center gap-8 md:gap-24">
    <form @submit.prevent="onSubmit" class="flex flex-col gap-2 items-center justify-center w-full">
      <div class="flex flex-col gap-2 items-left justify-center w-full sm:flex-row">
        <TextField name="name" label="Name" type="text" required />
        <TextField name="email" label="Email" type="email" required />
      </div>
      <div class="flex flex-col gap-2 items-left justify-center w-full sm:flex-row">
        <TextField name="phone" label="Phone" type="text" required />
        <TextField name="address" label="Address" type="text" required />
      </div>
      <button
        class="bg-primary-400 w-1/2 sm:w-3/5 lg:w-1/3 mt-4 md:mt-6 hover:bg-primary-600 transition-colors text-white py-2 sm:py-1 px-4 rounded"
      >
        {{ isSubmitting ? 'Adding Supplier...' : 'Add Supplier' }}
      </button>
    </form>
  </main>
</template>
