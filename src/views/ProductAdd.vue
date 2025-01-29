<script setup lang="ts">
import TextField from '../components/UI/TextField.vue';
import TheButton from '../components/UI/TheButton.vue';
import { useForm } from '@formwerk/core';
import { ProductSchema } from '../validation/productSchema';
import apiClient from '../util/apiClient';
import NumberField from '@/components/UI/NumberField.vue';
const schema = ProductSchema;
const { values, handleSubmit, isSubmitting } = useForm({ schema }); // { name: '', price: '', description: '', barcode: '', sku: '', quantity: '', reorderPoint: '', expiryDate: '', categoryId: '', supplierId: '', batchNumber: '', dosageForm: '', strength: '', storage: '', prescriptionRequired: '' }
const onSubmit = handleSubmit(async (data) => {
  console.log(JSON.stringify(data.toObject()));
  try {
    const response = await apiClient.post('/products', data);
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
    <h1 class="text-3xl text-primary-500 text-center font-bold">Add Product</h1>
    <form
      @submit.prevent="onSubmit"
      class="flex flex-col gap-2 items-center justify-center w-full md:w-1/3"
    >
      <TextField name="name" label="Name" type="text" required />
      <TextField name="barcode" label="Barcode" type="text" required />
      <TextField name="batchNumber" label="Batch Number" type="text" required />
      <TextField name="dosageForm" label="Dosage Form" type="text" required />
      <TextField name="manufacturer" label="Manufacturer" type="text" required />
      <TextField name="genericName" label="Generic Name" type="text" required />
      <TextField name="sku" label="SKU" type="text" required />
      <TextField name="description" label="Description" type="text" required />
      <TextField name="categoryId" label="Category Id" type="text" required />
      <TextField name="supplierId" label="Supplier Id" type="text" required />
      <TextField name="batchNumber" label="Batch Number" type="text" required />
      <TextField name="dosageForm" label="Dosage Form" type="text" required />
      <TextField name="strength" label="Strength" type="text" required />
      <TextField name="storage" label="Storage" type="text" required />
      <NumberField name="costPrice" label="Cost Price" type="number" required />
      <NumberField name="reorderPoint" label="Reorder Point" type="number" required />
      <NumberField name="price" label="Price" type="number" required />
      <NumberField name="quantity" label="Quantity" type="number" required />
      <TheButton type="submit">
        {{ isSubmitting ? 'Adding Product...' : 'Add Product' }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nM3TUUqCURAF4J+MelFXILmKENTA1Si1CteQuQJRtxDtxUpsEb59MXTJ+Pv/bqAPnrfLmTn3cGamKE4N3GGJLfb4wBrDXGMDc7zhAV1coYMxXhN/WSfwhBe0a/gmnkOkiuxhE0UZl63kcJBJ4gBMS+8JVsV/4QvfIriJYKuKchil2uuYzjEOutgdk8F97Em56DbNOTeFNt7RryJnaQ9afzQHP6tTv8BjaRMjsEg9bMfP8Un1Jv4QGmCRGuIWduk2fts+C3wCojcuU/AEC20AAAAASUVORK5CYII="
          alt="login-rounded-right"
        />
      </TheButton>
    </form>
  </main>
</template>
