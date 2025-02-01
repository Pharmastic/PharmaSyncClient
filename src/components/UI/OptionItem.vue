<script setup lang="ts">
import { type OptionProps, useOption } from '@formwerk/core';

const props = defineProps<OptionProps>();
console.log(props);

const { optionProps } = useOption(props);
console.log('optionProps:', optionProps.value);
</script>

<template>
  <div v-bind="optionProps" class="option">
    {{ label }}
  </div>
</template>

<style scoped>
.option {
  user-select: none;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 14px;
  border: 1px solid transparent;
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s;

  &:hover {
    background-color: #e4e4e7;
  }

  &[aria-selected='true'],
  &[aria-checked='true'] {
    background-color: #4caf50;
    color: #fff;
  }

  &:focus {
    outline: none;
    border-color: #4caf50;
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
