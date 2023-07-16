<script setup lang="ts">
import { useConfig } from '@/store';
import AttendanceCompletenessChart from '@/components/AttendanceCompletenessChart.vue';

/** Config Store */
const configStore = useConfig();
</script>
<template>
  <div
    class="card-dashboard bg-background"
    :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'"
  >
    <div class="tw-text-xl tw-font-bold text-secondary">
      Attendance Completeness
    </div>
    <div class="tw-my-5 fcc tw-h-[500px]">
      <AttendanceCompletenessChart />
    </div>
  </div>
</template>

<style scoped></style>
