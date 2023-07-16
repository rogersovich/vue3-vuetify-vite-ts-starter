<script setup lang="ts">
import { useConfig } from '@/store';
import { VDataTable } from 'vuetify/labs/VDataTable';

/** Config Store */
const configStore = useConfig();

const sortBy = [{ key: 'requestOn', order: 'asc' }];
const headers = [
  {
    title: 'Leave Code',
    key: 'leaveCode',
    sortable: false,
  },
  { title: 'Requested On', key: 'requestOn' },
  { title: 'Leave Type', key: 'leaveType' },
  { title: 'Start Date', key: 'startDate' },
  { title: 'End Date', key: 'endDate' },
  { title: 'Duration', key: 'duration' },
  { title: 'Day', key: 'day' },
];

const items = [
  {
    leaveCode: 'LV-PTES-PT-CV10435-01-23-001',
    requestOn: 'Mon, 02 Jan 2023',
    leaveType: 'Annual Leave',
    startDate: 'Tue, 03 Jan 2023',
    endDate: 'Tue, 03 Jan 2023',
    duration: '1 Day(s)',
    day: 'Full Day',
  },
  {
    leaveCode: 'LV-PTES-PT-CV10435-01-23-001',
    requestOn: 'Mon, 12 Jan 2023',
    leaveType: 'Sick Leave',
    startDate: 'Tue, 11 Jan 2023',
    endDate: 'Tue, 03 Jan 2023',
    duration: '2 Day(s)',
    day: 'Full Day',
  },
  {
    leaveCode: 'LV-PTES-PT-CV10435-01-23-001',
    requestOn: 'Mon, 22 Jan 2023',
    leaveType: 'Annual Leave',
    startDate: 'Tue, 21 Jan 2023',
    endDate: 'Tue, 03 Jan 2023',
    duration: '3 Day(s)',
    day: 'Half Day - Second Half',
  },
  {
    leaveCode: 'LV-PTES-PT-CV10435-01-23-001',
    requestOn: 'Mon, 14 Jan 2023',
    leaveType: 'Sick Leave',
    startDate: 'Tue, 30 Jan 2023',
    endDate: 'Tue, 03 Jan 2023',
    duration: '0.5 Day(s)',
    day: 'Full Day',
  },
  {
    leaveCode: 'LV-PTES-PT-CV10435-01-23-001',
    requestOn: 'Mon, 20 Jan 2023',
    leaveType: 'Annual Leave',
    startDate: 'Tue, 09 Jan 2023',
    endDate: 'Tue, 03 Jan 2023',
    duration: '1 Day(s)',
    day: 'Half Day - Second Half',
  },
  {
    leaveCode: 'LV-PTES-PT-CV10435-01-23-001',
    requestOn: 'Mon, 12 Jan 2023',
    leaveType: 'Sick Leave',
    startDate: 'Tue, 01 Jan 2023',
    endDate: 'Tue, 03 Jan 2023',
    duration: '0.5 Day(s)',
    day: 'Full Day',
  },
  {
    leaveCode: 'LV-PTES-PT-CV10435-01-23-001',
    requestOn: 'Mon, 08 Jan 2023',
    leaveType: 'Annual Leave',
    startDate: 'Tue, 14 Jan 2023',
    endDate: 'Tue, 03 Jan 2023',
    duration: '2 Day(s)',
    day: 'Half Day - First Half',
  },
];
</script>
<template>
  <div>
    <v-data-table
      v-model="sortBy"
      :headers="headers"
      :items="items"
      :show-current-page="false"
      :hide-default-footer="true"
      class="elevation-0 tw-border tw-rounded"
      :class="`${
        configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'
      }`"
    >
      <template #bottom>
        <div />
      </template>
    </v-data-table>
  </div>
</template>

<style scoped></style>
