<script setup lang="ts">
import { useConfig } from '@/store';
import LeaveRecapTable from '@/components/LeaveRecapTable.vue';

/** Config Store */
const configStore = useConfig();
</script>
<template>
  <div
    class="card-dashboard bg-background"
    :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'"
  >
    <div class="tw-text-xl tw-font-bold text-secondary">Leave Recap</div>
    <div class="tw-mt-4">
      <LeaveRecapTable />
    </div>
  </div>
</template>

<style scoped></style>
