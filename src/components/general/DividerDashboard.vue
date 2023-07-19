<script setup lang="ts">
import { useConfig } from '@/store';

/** Config Store */
const configStore = useConfig();
</script>
<template>
  <v-divider
    class="tw-my-3 tw-opacity-50"
    :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'"
  />
</template>

<style scoped></style>
