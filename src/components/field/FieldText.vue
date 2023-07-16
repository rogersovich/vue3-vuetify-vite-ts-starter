<script setup lang="ts">
import { useField } from 'vee-validate';
import type { PropType } from 'vue';
const props = defineProps({
  name: {
    default: null,
    type: String,
  },
  label: {
    default: null,
    type: String,
  },
  placeholder: {
    default: 'Input Field',
    type: String,
  },
  type: {
    default: 'text',
    type: String,
  },
  variant: {
    default: 'outlined',
    type: String as PropType<
      | 'filled'
      | 'outlined'
      | 'plain'
      | 'underlined'
      | 'solo'
      | 'solo-inverted'
      | 'solo-filled'
    >,
  },
  modelValue: {
    default: 'text',
    type: String,
  },
});

const { value, errorMessage } = useField(() => props.name, undefined, {
  syncVModel: true,
});
</script>

<template>
  <div>
    <div
      v-if="label"
      class="tw-mb-1.5 tw-text-base tw-font-bold text-secondary-blue-dark"
    >
      {{ label }}
    </div>
    <div />
    <v-text-field
      v-model="value"
      :placeholder="placeholder"
      :variant="variant"
      density="compact"
      color="primary-600"
      :type="type"
      hide-details
      theme="dark"
    >
      <template #prepend-inner>
        <div><slot name="prepend-inner" /></div>
      </template>
      <template #append-inner>
        <div><slot name="append-inner" /></div>
      </template>
    </v-text-field>
    <div class="text-error tw-text-xs tw-mt-1">
      {{ errorMessage }}
    </div>
  </div>
</template>
