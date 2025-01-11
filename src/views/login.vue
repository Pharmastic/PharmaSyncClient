<script setup lang="ts">
import AuthInput from '../components/UI/AuthInput.vue'
import TheButton from '../components/UI/TheButton.vue'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<template>
  <main
    class="h-screen w-full flex flex-col px-8 md:px-12 lg:px-24 items-center justify-center gap-8 md:gap-24"
  >
    <h1 class="text-3xl text-primary-500 text-center font-bold">Login</h1>
    <div class="flex flex-col sm:flex-row w-full gap-8 sm:gap-0 items-center justify-around">
      <img src="../assets/illust/pharama.svg" alt="pharmastic" class="w-11/12 sm:w-1/2" />
      <div class="flex flex-col gap-2 items-center justify-center w-full md:w-1/3">
        <AuthInput v-model="email" type="email" placeholder="Email" />
        <AuthInput v-model="password" type="password" placeholder="Password" />
        <TheButton
          >Login
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nM3TUUqCURAF4J+MelFXILmKENTA1Si1CteQuQJRtxDtxUpsEb59MXTJ+Pv/bqAPnrfLmTn3cGamKE4N3GGJLfb4wBrDXGMDc7zhAV1coYMxXhN/WSfwhBe0a/gmnkOkiuxhE0UZl63kcJBJ4gBMS+8JVsV/4QvfIriJYKuKchil2uuYzjEOutgdk8F97Em56DbNOTeFNt7RryJnaQ9afzQHP6tTv8BjaRMjsEg9bMfP8Un1Jv4QGmCRGuIWduk2fts+C3wCojcuU/AEC20AAAAASUVORK5CYII="
            alt="login-rounded-right"
        /></TheButton>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
