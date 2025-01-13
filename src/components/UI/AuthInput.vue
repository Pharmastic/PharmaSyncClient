<script setup lang="ts">
import { type TextFieldProps, useTextField } from '@formwerk/core'

const props = defineProps<TextFieldProps>()

const { inputProps, displayError, errorMessageProps } = useTextField(props)
</script>

<template>
  <div class="w-full">
    <input class="w-full p-2 border border-gray-300 rounded-lg" v-bind="inputProps" />

    <div class="mt-1 text-sm text-red-500" v-bind="errorMessageProps">
      {{ displayError() }}
    </div>
  </div>
</template>
