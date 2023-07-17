<script setup lang="ts">
import SummaryCard from './components/SummaryCard.vue';
import TaskCard from './components/TaskCard.vue';
import ProfileCard from './components/ProfileCard.vue';
import AttendanceCard from './components/AttendanceCard.vue';
</script>
<template>
  <div class="bg-background-1 tw-min-h-full tw-p-4 md:tw-p-6 font-open-sans">
    <div class="grid-12 tw-grid-rows-1 md:tw-grid-flow-col tw-gap-3 md:tw-gap-6">
      <div class="tw-col-span-12 md:tw-col-span-7">
        <SummaryCard />
      </div>
      <div class="tw-col-span-12 md:tw-col-span-7">
        <TaskCard />
      </div>
      <div class="tw-col-span-12 md:tw-col-span-5 md:tw-row-span-2 xs:tw-order-first">
        <div class="grid-1 tw-gap-4">
          <ProfileCard />
          <AttendanceCard />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
