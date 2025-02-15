<script setup lang="ts">
import TextField from '../components/UI/TextField.vue';
import TheButton from '../components/UI/TheButton.vue';
import { useForm } from '@formwerk/core';
import { ProductSchema } from '../validation/productSchema';
import apiClient from '../utils/apiClient.ts';
import NumberField from '@/components/UI/NumberField.vue';
import SelectField from '@/components/UI/SelectField.vue';
import OptionItem from '@/components/UI/OptionItem.vue';
import CheckBox from '@/components/UI/CheckBox.vue';
import { getSuppliers } from '@/components/Suppliers/HandleSuppliers.ts';
import { getCategories } from '@/components/categories/HandleCategory.ts';
import EditIcon from '@/components/icons/EditIcon.vue';
import RemoveIcon from '@/components/icons/RemoveIcon.vue';
import { ref } from 'vue';

const schema = ProductSchema;
const { values, handleSubmit, isSubmitting, setValues } = useForm({
  schema,
});
const categories = ref([]);
const suppliers = ref([]);

const onSubmit = handleSubmit(async (data) => {
  try {
    console.log(JSON.stringify(data.toObject()));
    console.log(data.toObject().expiryDate);
    data.toObject().expiryDate = new Date(data.toObject().expiryDate).toISOString();
    const response = await apiClient.post('/products', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
const fetchCategories = async () => {
  try {
    const response = await getCategories();
    categories.value = response;
  } catch (error) {
    console.error(error);
  }
};
const fetchSuppliers = async () => {
  try {
    const response = await getSuppliers();
    suppliers.value = response;
  } catch (error) {
    console.error(error);
  }
};
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
      <!-- Other form fields -->
      <TextField name="name" label="Name" type="text" required />
      <TextField name="barcode" label="Barcode" type="text" required />
      <TextField name="batchNumber" label="Batch Number" type="text" required />
      <TextField name="manufacturer" label="Manufacturer" type="text" required />
      <TextField name="genericName" label="Generic Name" type="text" required />
      <TextField name="sku" label="SKU" type="text" required />
      <TextField name="description" label="Description" type="text" required />
      <SelectField name="categoryId" label="Category Id" @click="fetchCategories" required>
        <OptionItem
          v-for="category in categories"
          :key="category.id"
          :label="category.name"
          :value="category.id"
        />
      </SelectField>
      <SelectField name="supplierId" label="Supplier Id" @click="fetchSuppliers" required>
        <OptionItem
          v-for="supplier in suppliers"
          :key="supplier.id"
          :label="supplier.name"
          :value="supplier.id"
        >
          <EditIcon />
          <RemoveIcon />
        </OptionItem>
      </SelectField>
      <SelectField name="dosageForm" label="Dosage Form" required>
        <OptionItem label="Tablet" value="TABLET" />
        <OptionItem label="Capsule" value="CAPSULE" />
        <OptionItem label="Liquid" value="LIQUID" />
        <OptionItem label="Injection" value="INJECTION" />
        <OptionItem label="cream" value="CREAM" />
        <OptionItem label="ointment" value="OINTMENT" />
        <OptionItem label="Drops" value="DROPS" />
        <OptionItem label="Inhaler" value="INHALER" />
        <OptionItem label="Powder" value="POWDER" />
        <OptionItem label="Other" value="OTHER" />
      </SelectField>
      <TextField name="strength" label="Strength" type="text" required />
      <TextField name="storage" label="Storage" type="text" required />
      <NumberField name="costPrice" label="Cost Price" type="number" required />
      <NumberField name="reorderPoint" label="Reorder Point" type="number" required />
      <NumberField name="price" label="Price" type="number" required />
      <NumberField name="quantity" label="Quantity" type="number" required />
      <CheckBox
        label="Prescription Required"
        name="prescriptionRequired"
        v-model="values.prescriptionRequired"
      />
      <input
        type="date"
        :value="values.expiryDate"
        @input="(e) => setValues({ expiryDate: e.target.value })"
      />
      <TheButton type="submit">
        {{ isSubmitting ? 'Adding Product...' : 'Add Product' }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nM3TUUqCURAF4J+MelFXILmKENTA1Si1CteQuQJRtxDtxUpsEb59MXTJ+Pv/bqAPnrfLmTn3cGamKE4N3GGJLfb4wBrDXGMDc7zhAV1coYMxXhN/WSfwhBe0a/gmnkOkiuxhE0UZl63kcJBJ4gBMS+8JVsV/4QvfIriJYKuKchil2uuYzjEOutgdk8F97Em56DbNOTEHNt7RryJnaQ9afzQHP6tTv8BjaRMjsEg9bMfP8Un1Jv4QGmCRGuIWduk2fts+C3wCojcuU/AEC20AAAAASUVORK5CYII="
          alt="login-rounded-right"
        />
      </TheButton>
    </form>
  </main>
</template>
