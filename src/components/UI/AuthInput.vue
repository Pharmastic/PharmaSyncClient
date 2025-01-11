<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :type="type"
    :placeholder="placeholder"
    class="w-full p-2 border border-gray-300 rounded-lg"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
</script>
