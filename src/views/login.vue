<template>
  <main
    class="h-screen bg-white w-full flex flex-col px-8 md:px-12 lg:px-24 items-center justify-center gap-8 md:gap-24"
  >
    <h1 class="text-3xl text-primary-500 text-center font-bold">Login</h1>

    <div class="flex flex-col sm:flex-row w-full gap-8 sm:gap-0 items-center justify-around">
      <img src="../assets/illust/pharama.svg" alt="pharmastic" class="w-11/12 sm:w-1/2" />

      <form
        @submit.prevent="onSubmit"
        class="flex flex-col gap-2 items-center justify-center w-full md:w-1/3"
      >
        <TextField name="email" label="Email" type="email" required />
        <TextField name="password" label="Password" type="password" required />

        <TheButton :disabled="isSubmitting" type="submit">
          {{ isSubmitting ? 'Logging in...' : 'Login' }}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nM3TUUqCURAF4J+MelFXILmKENTA1Si1CteQuQJRtxDtxUpsEb59MXTJ+Pv/bqAPnrfLmTn3cGamKE4N3GGJLfb4wBrDXGMDc7zhAV1coYMxXhN/WSfwhBe0a/gmnkOkiuxhE0UZl63kcJBJ4gBMS+8JVsV/4QvfIriJYKuKchil2uuYzjEOutgdk8F97Em56DbNOTeFNt7RryJnaQ9afzQHP6tTv8BjaRMjsEg9bMfP8Un1Jv4QGmCRGuIWduk2fts+C3wCojcuU/AEC20AAAAASUVORK5CYII="
            alt="login-rounded-right"
          />
        </TheButton>
        <p class="text-sm text-primary-500">
          Don't have an account?
          <router-link to="/signup" class="text-primary-600">Sign Up</router-link>
        </p>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useForm } from '@formwerk/core';
import TextField from '../components/UI/TextField.vue';
import TheButton from '@/components/UI/TheButton.vue';
import { LoginSchema } from '../validation/authSchemas';
import apiClient from '@/util/apiClient.ts';
const schema = LoginSchema;
const { values, handleSubmit, isSubmitting } = useForm({ schema });
values; // { email: '', password: '' }
const onSubmit = handleSubmit(async (data) => {
  console.log(data);
  try {
    const response = await apiClient.post('/auth/login', data);
    sessionStorage.setItem('accessToken', response.data.accessToken);
    sessionStorage.setItem('refreshToken', response.data.refreshToken);
    window.location.href = '/';
  } catch (error) {
    console.error(error);
  }
});
</script>
