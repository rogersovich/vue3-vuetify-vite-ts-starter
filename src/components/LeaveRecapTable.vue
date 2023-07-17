<script setup lang="ts">
import { useConfig } from '@/store';
import { VDataTable } from 'vuetify/labs/VDataTable';
import { TABLE_DATA } from '@/constant/dashboard';
import type { Header, Item } from "vue3-easy-data-table";

/** Config Store */
const configStore = useConfig();


// const sortBy = [{ key: 'requestOn', order: 'asc' }];
// const headers = [
//   {
//     title: 'Leave Code',
//     key: 'leaveCode',
//     sortable: false,
//   },
//   { title: 'Requested On', key: 'requestOn' },
//   { title: 'Leave Type', key: 'leaveType' },
//   { title: 'Start Date', key: 'startDate' },
//   { title: 'End Date', key: 'endDate' },
//   { title: 'Duration', key: 'duration' },
//   { title: 'Day', key: 'day' },
//   { title: 'Leave Category', key: 'leave_category' },
//   { title: 'Status', key: 'status' },
//   { title: 'Reason', key: 'reason' },
// ];

const headers: Header[] = [
  { text: "PLAYER", value: "player", fixed: true, width: 200 }, // set fixed to true
  { text: "TEAM", value: "team", width: 100 }, // set fixed to true
  { text: "NUMBER", value: "number", width: 200 },
  { text: "POSITION", value: "position", width: 200 },
  { text: "HEIGHT", value: "height", width: 200 },
  { text: "WEIGHT (lbs)", value: "weight", sortable: true, width: 200 },
  { text: "LAST ATTENDED", value: "lastAttended", width: 200 },
  { text: "COUNTRY", value: "country", width: 200 },
];

const items: Item[] = [
  { "player": "Stephen Curry", "team": "GSW", "number": 30, "position": 'G', "height": '6-2', "weight": 185, "lastAttended": "Davidson", "country": "USA" },
  { "player": "Lebron James", "team": "LAL", "number": 6, "position": 'F', "height": '6-9', "weight": 250, "lastAttended": "St. Vincent-St. Mary HS (OH)", "country": "USA" },
  { "player": "Kevin Durant", "team": "BKN", "number": 7, "position": 'F', "height": '6-10', "weight": 240, "lastAttended": "Texas-Austin", "country": "USA" },
  { "player": "Giannis Antetokounmpo", "team": "MIL", "number": 34, "position": 'F', "height": '6-11', "weight": 242, "lastAttended": "Filathlitikos", "country": "Greece" },
];

</script>
<template>
  <div>
    <!-- <v-data-table
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
    </v-data-table> -->

    <EasyDataTable show-index :headers="headers" :items="items" hide-footer :table-class-name="configStore.theme ? 'dark-table' : 'light-table'">
    </EasyDataTable>
  </div>
</template>

<style scoped>
.dark-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #2d3a4f;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #2d3a4f;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #2d3a4f;
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
  ;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}

.light-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #000;
  --easy-table-header-background-color: #fff;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #000;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #000;
  --easy-table-body-row-background-color: #fff;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #000;
  --easy-table-body-row-hover-background-color: #eee;

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
  ;
  --easy-table-scrollbar-corner-color: #fff;

  --easy-table-loading-mask-background-color: #fff;
}
</style>
