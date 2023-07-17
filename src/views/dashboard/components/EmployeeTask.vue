<script setup lang="ts">
import { useConfig } from '@/store';
import OverallTaskChart from '@/components/OverallTaskChart.vue';

/** Config Store */
const configStore = useConfig();
</script>
<template>
  <div
    class="card-dashboard bg-background"
    :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'"
  >
    <div class="tw-text-lg md:tw-text-xl tw-font-bold text-secondary">
      Overall Task Progress
    </div>
    <div class="tw-my-5">
      <OverallTaskChart />
    </div>
  </div>
</template>

<style scoped></style>
