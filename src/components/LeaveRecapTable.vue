<script setup lang="ts">
import { useConfig } from '@/store';
import { VDataTable } from 'vuetify/labs/VDataTable';
import { TABLE_DATA } from '@/constant/dashboard';

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
  { title: 'Leave Category', key: 'leave_category' },
  { title: 'Status', key: 'status' },
  { title: 'Reason', key: 'reason' },
];

</script>
<template>
  <div>
    <v-data-table
      v-model="sortBy"
      :headers="headers"
      :items="TABLE_DATA"
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
