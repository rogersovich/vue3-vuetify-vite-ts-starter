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
    type: [String, Boolean],
  },
});

const { value, errorMessage } = useField(() => props.name, undefined, {
  syncVModel: true,
});
</script>

<template>
  <div>
    <v-checkbox
      v-model="value"
      color="primary-600"
      :placeholder="placeholder"
      density="compact"
      hide-details
    >
      <template #label>
        <slot name="label" />
      </template>
    </v-checkbox>
    <div class="text-error tw-text-xs tw-mt-1">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style>
.v-label {
  opacity: 1 !important;
}
</style>
