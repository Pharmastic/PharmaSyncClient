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
  <main
    class="bg-white w-full flex flex-col px-8 md:px-12 lg:px-24 items-center justify-center gap-8 md:gap-24"
  >
    <h1 class="text-3xl text-primary-500 text-center font-bold">Add Supplier</h1>
    <form
      @submit.prevent="onSubmit"
      class="flex flex-col gap-2 items-center justify-center w-full md:w-1/3"
    >
      <TextField name="name" label="Name" type="text" required />
      <TextField name="email" label="Email" type="email" required />
      <TextField name="phone" label="Phone" type="text" required />
      <TextField name="address" label="Address" type="text" required />
      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Adding Supplier...' : 'Add Supplier' }}
      </button>
    </form>
  </main>
</template>
