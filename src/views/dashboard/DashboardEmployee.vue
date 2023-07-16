<script setup lang="ts">
import { ref } from 'vue';
import EmployeeAttendance from './components/EmployeeAttendance.vue';
import EmployeeCompleteness from './components/EmployeeCompleteness.vue';
import EmployeeTask from './components/EmployeeTask.vue';

const displatDate = ref(0);
</script>
<template>
  <div class="bg-background-1 tw-min-h-full tw-p-6 font-open-sans">
    <div class="fcb tw-mb-4">
      <div class="tw-text-2xl tw-font-bold">Employee Summary</div>
      <div class="fcs tw-gap-6">
        <div class="fcs tw-gap-4">
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
        <div class="fcs tw-gap-4">
          <div class="tw-text-sm">Periode</div>
          <v-btn border variant="flat" append-icon="mdi-calendar-blank-outline">
            <div class="tw-font-bold">2022</div>

            <template #append>
              <v-icon color="primary-500" />
            </template>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="grid-12 tw-gap-6">
      <div class="tw-col-span-7">
        <EmployeeAttendance />
      </div>
      <div class="tw-col-span-5">
        <EmployeeCompleteness />
      </div>
      <div class="tw-col-span-5">
        <EmployeeTask />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
