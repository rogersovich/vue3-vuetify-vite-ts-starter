<script setup lang="ts">
import { useDisplay } from 'vuetify';

import SummaryCard from './components/SummaryCard.vue';
import TaskCard from './components/TaskCard.vue';
import ProfileCard from './components/ProfileCard.vue';
import AttendanceCard from './components/AttendanceCard.vue';

const { mobile } = useDisplay();
</script>
<template>
  <div class="bg-background-1 tw-min-h-full tw-p-4 md:tw-p-6 font-open-sans">
    <div
      class="grid-12 tw-grid-rows-1 md:tw-grid-flow-col tw-gap-3 md:tw-gap-6"
    >
      <div class="tw-col-span-12 md:tw-col-span-7">
        <SummaryCard />
      </div>
      <div v-if="mobile" class="tw-col-span-12">
        <AttendanceCard />
      </div>
      <div class="tw-col-span-12 md:tw-col-span-7">
        <TaskCard />
      </div>
      <div
        class="tw-col-span-12 md:tw-col-span-5 md:tw-row-span-2 tw-order-first md:tw-order-none"
      >
        <div class="grid-1 tw-gap-4">
          <ProfileCard />
          <AttendanceCard v-if="!mobile" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
