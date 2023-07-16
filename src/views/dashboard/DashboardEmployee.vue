<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

import EmployeeAttendance from './components/EmployeeAttendance.vue';
import EmployeeCompleteness from './components/EmployeeCompleteness.vue';
import EmployeeTask from './components/EmployeeTask.vue';
import EmployeeTaskCompletion from './components/EmployeeTaskCompletion.vue';
import EmployeeRecap from './components/EmployeeRecap.vue';

const { mobile } = useDisplay();
const displatDate = ref(0);
</script>
<template>
  <div class="bg-background-1 tw-min-h-full tw-p-4 md:tw-p-6 font-open-sans">
    <div class="md:fcb tw-mb-6">
      <div class="tw-text-2xl tw-font-bold tw-mb-4 md:tw-mb-0">
        Employee Summary
      </div>
      <div class="md:fcs md:tw-gap-6">
        <div
          class="tw-flex tw-items-center tw-justify-between md:tw-justify-start tw-gap-4 tw-mb-4 md:tw-mb-0"
        >
          <div class="tw-text-sm">Display Data in</div>
          <v-btn-toggle
            v-model="displatDate"
            density="compact"
            border
            variant="flat"
            divided
            color="primary-500"
          >
            <v-btn>Monthly</v-btn>
            <v-btn>Yearly</v-btn>
          </v-btn-toggle>
        </div>
        <div
          class="tw-flex tw-items-center tw-justify-between md:tw-justify-start tw-gap-4"
        >
          <div class="tw-text-sm">Periode</div>
          <v-btn border variant="flat" append-icon="mdi-calendar-blank-outline">
            <div class="tw-font-bold">
              {{ new Date().getFullYear() }}
            </div>

            <template #append>
              <v-icon color="primary-500" />
            </template>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="grid-12 tw-gap-6">
      <div :class="mobile ? 'tw-col-span-12' : 'tw-col-span-7'">
        <EmployeeAttendance />
      </div>
      <div :class="mobile ? 'tw-col-span-12' : 'tw-col-span-5'">
        <EmployeeCompleteness />
      </div>
      <div :class="mobile ? 'tw-col-span-12' : 'tw-col-span-5'">
        <EmployeeTask />
      </div>
      <div :class="mobile ? 'tw-col-span-12' : 'tw-col-span-7'">
        <EmployeeTaskCompletion />
      </div>
      <div class="tw-col-span-12">
        <EmployeeRecap />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
