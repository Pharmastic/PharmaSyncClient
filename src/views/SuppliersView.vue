<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useForm } from '@formwerk/core';
import { SuppliersSchema } from '../validation/suppliersSchema.ts';

import {
  updateSupplier,
  getSuppliers,
  deleteSupplier,
} from '@/components/Suppliers/HandleSuppliers.ts';
import TextField from '../components/UI/TextField.vue';
import AddSupplier from '../components/Suppliers/AddSuppliers.vue';
const isLoading = ref(true);
const schema = SuppliersSchema;
const suppliers = ref([]);
const selectedSupplier = ref(null);
const showModal = ref(false);

onMounted(async () => {
  suppliers.value = await getSuppliers();
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});

const headers = computed(() => {
  return [
    { title: 'Name', value: 'name' },
    { title: 'Email', value: 'email' },
    { title: 'Phone', value: 'phone' },
    { title: 'Address', value: 'address' },
    { title: 'Created At', value: 'createdAt' },
  ];
});

const refreshSuppliers = async () => {
  suppliers.value = await getSuppliers();
};
const { values, handleSubmit, isSubmitting } = useForm({ schema });

const onSubmit = handleSubmit(async (data) => {
  if (selectedSupplier.value) {
    await updateSupplier(selectedSupplier.value.item.id, data);
    await refreshSuppliers();
    showModal.value = false;
  }
});

const handleDelete = async () => {
  if (selectedSupplier.value) {
    await deleteSupplier(selectedSupplier.value.item.id);
    await refreshSuppliers();
    showModal.value = false;
  }
};
const openModal = async (item: any) => {
  selectedSupplier.value = item;
  showModal.value = true;
};
</script>

<template>
  <main>
    <div v-if="isLoading" class="flex flex-col gap-8 items-center justify-center my-24 md:my-48">
      <img src="../assets/icons8-dots-loading.gif" alt="loading" />
      <h1 class="text-primary-500 font-italic text-xl md:text-3xl">
        Take a deep breath, we are loading your data...
      </h1>
    </div>
    <div class="flex flex-col items-center justify-center gap-4 mx-4 md:mx-12" v-else>
      <h1 class="text-3xl font-bold mb-4">Suppliers</h1>
      <AddSupplier />
      <v-data-table
        :headers="headers"
        :items="suppliers"
        :server-items-length="suppliers.length"
        item-key="id"
        class="elevation-4"
        @click:row="(event, item) => openModal(item)"
      ></v-data-table>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center z-50"
      @click.self="showModal = false"
    >
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
          <!-- Modal Header -->
          <div class="flex justify-between items-center p-4 border-b">
            <h2 class="text-xl font-semibold">Edit Supplier</h2>
            <div class="flex gap-2">
              <button
                type="button"
                @click="handleDelete"
                class="p-2 text-red-600 hover:bg-red-50 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Body -->
          <div class="p-4 space-y-4">
            <TextField name="name" :value="selectedSupplier.item.name" label="Name" required />
            <TextField name="email" :value="selectedSupplier.item.email" label="Email" required />
            <TextField name="phone" :value="selectedSupplier.item.phone" label="Phone" required />
            <TextField
              name="address"
              :value="selectedSupplier.item.address"
              label="Address"
              required
            />
          </div>

          <!-- Modal Footer -->
          <div class="flex justify-end gap-2 p-4 border-t">
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Saving...</span>
              <span v-else>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
