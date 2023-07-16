<script setup lang="ts">
// import { useConfig } from '@/store';
// import DividerDashboard from '@/components/DividerDashboard.vue';
import SummaryCard from './components/SummaryCard.vue';
import TaskCard from './components/TaskCard.vue';
import ProfileCard from './components/ProfileCard.vue';
import AttendanceCard from './components/AttendanceCard.vue';

/** Config Store */
// const configStore = useConfig();
</script>
<template>
  <div class="bg-background-1 tw-min-h-full tw-p-6 font-open-sans">
    <div class="grid-12 tw-grid-rows-1 tw-grid-flow-col tw-gap-6">
      <div class="tw-col-span-7">
        <SummaryCard />
      </div>
      <div class="tw-col-span-7">
        <TaskCard />
      </div>
      <div class="tw-col-span-5 tw-row-span-2">
        <div class="grid-1 tw-gap-4">
          <ProfileCard />
          <AttendanceCard />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
