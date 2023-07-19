<script setup lang="ts">
import { useConfig } from '@/store';
import { TABLE_DATA } from '@/constant/dashboard';
import { getStatusColor } from '@/helpers/getFormatColor';
import { useDisplay } from 'vuetify';
import type { Header } from 'vue3-easy-data-table';

/** Config Store */
const configStore = useConfig();

const { mobile } = useDisplay();

const TABLE_HEADER: Header[] = [
  {
    text: 'Leave Code',
    value: 'leaveCode',
    fixed: true,
    width: mobile ? 150 : 300,
  },
  { text: 'Requested On', value: 'requestOn', width: 200 },
  { text: 'Leave Type', value: 'leaveType', width: 200 },
  { text: 'Start Date', value: 'startDate', width: 200 },
  { text: 'End Date', value: 'endDate', width: 200 },
  { text: 'Duration', value: 'duration', sortable: true, width: 150 },
  { text: 'Day Type', value: 'day', width: 200 },
  { text: 'Leave Category', value: 'leave_category', width: 200 },
  { text: 'Status', value: 'status', width: 150 },
  { text: 'Reason', value: 'reason', width: 200 },
];
</script>
<template>
  <div>
    <EasyDataTable
      :headers="TABLE_HEADER"
      :items="TABLE_DATA"
      hide-footer
      :table-class-name="configStore.theme ? 'dark-table' : 'light-table'"
    >
      <template #item-status="{ status }">
        <div class="customize-header">
          <v-sheet
            :height="30"
            :width="100"
            rounded
            :color="getStatusColor(status)"
            class="fcc tw-capitalize tw-font-bold"
          >
            {{ status }}
          </v-sheet>
        </div>
      </template>
    </EasyDataTable>
  </div>
</template>

<style scoped>
.dark-table {
  --easy-table-border: none;
  --easy-table-row-border: none;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #0d183d;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #12204d;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #fff;
  --easy-table-body-row-hover-background-color: #0d183d;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #0d183d;
  --easy-table-footer-font-color: #c0c7d2;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}

.light-table {
  --easy-table-border: none;
  --easy-table-row-border: none;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #212121;
  --easy-table-header-background-color: #eaeaea;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #212121;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #212121;
  --easy-table-body-row-background-color: #fff;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #212121;
  --easy-table-body-row-hover-background-color: #eaeaea;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #fff;
  --easy-table-footer-font-color: #c0c7d2;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;

  --easy-table-scrollbar-track-color: #fff;
  --easy-table-scrollbar-color: #fff;
  --easy-table-scrollbar-thumb-color: #4c5d7a;
  --easy-table-scrollbar-corner-color: #fff;

  --easy-table-loading-mask-background-color: #fff;
}

:deep(.vue3-easy-data-table__header th.sortable .sortType-icon) {
  margin-left: 10px !important;
  border-bottom-color: #04a5f4 !important;
}
</style>
