<template>
  <main
    class="h-screen w-full flex flex-col px-8 md:px-12 lg:px-24 items-center justify-center gap-8 md:gap-24"
  >
    <h1 class="text-3xl text-primary-500 text-center font-bold">Sign Up to PharmaSync</h1>
    <div class="flex flex-col sm:flex-row w-full gap-8 sm:gap-0 items-center justify-around">
      <img src="../assets/illust/pharama.svg" alt="pharmastic" class="w-11/12 sm:w-1/2" />
      <form
        @submit.prevent="onSubmit"
        class="flex flex-col gap-2 items-center justify-center w-full md:w-1/3"
      >
        <TextField
          name="firstName"
          label="First Name"
          type="text"
          autocomplete="firstName"
          required
        />
        <TextField name="lastName" label="Last Name" type="text" autocomplete="lastName" required />
        <TextField name="email" label="Email" type="email" autocomplete="email" required />
        <TextField
          name="password"
          label="Password"
          type="password"
          autocomplete="current-password"
          required
        />

        <TheButton type="submit">
          {{ isSubmitting ? 'Signing up...' : 'Sign Up' }}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nM3TUUqCURAF4J+MelFXILmKENTA1Si1CteQuQJRtxDtxUpsEb59MXTJ+Pv/bqAPnrfLmTn3cGamKE4N3GGJLfb4wBrDXGMDc7zhAV1coYMxXhN/WSfwhBe0a/gmnkOkiuxhE0UZl63kcJBJ4gBMS+8JVsV/4QvfIriJYKuKchil2uuYzjEOutgdk8F97Em56DbNOTeFNt7RryJnaQ9afzQHP6tTv8BjaRMjsEg9bMfP8Un1Jv4QGmCRGuIWduk2fts+C3wCojcuU/AEC20AAAAASUVORK5CYII="
            alt="login-rounded-right"
          />
        </TheButton>
        <p class="text-sm text-primary-500">
          Already have an account?
          <router-link to="/login" class="text-primary-600">Login</router-link>
        </p>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import TextField from '../components/UI/TextField.vue';
import TheButton from '../components/UI/TheButton.vue';
import { SignUpSchema } from '../validation/authSchemas';
import { useForm } from '@formwerk/core';
import apiClient from '../util/apiClient.ts';

const roles = [
  { value: 'ADMIN', label: 'Admin' },
  { value: 'USER', label: 'User' },
  { value: 'PHARMACIST', label: 'Pharmacist' },
  { value: 'Maneger', label: 'Maneger' },
];

const schema = SignUpSchema;
const { values, handleSubmit, isSubmitting } = useForm({ schema });

const onSubmit = handleSubmit(async (data) => {
  console.log('meow');
  console.log(data);
  try {
    const response = await apiClient.post('/auth/register', data);
    console.log(response.data.refreshToken);
    sessionStorage.setItem('token', response.data.refreshToken);
  } catch (error) {
    console.error(error);
  }
});
</script>
