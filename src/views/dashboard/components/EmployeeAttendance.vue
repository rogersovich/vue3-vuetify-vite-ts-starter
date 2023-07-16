<script setup lang="ts">
import { useConfig } from '@/store';
import AttendanceSummaryChart from '@/components/AttendanceSummaryChart.vue';

/** Config Store */
const configStore = useConfig();

const attendanceOptions = [
  {
    title: 'Total Working Days',
    total: '237',
    color: 'tw-bg-[#0796E5]',
  },
  {
    title: 'Actual Working Hours',
    total: '2126 hr 14 min',
    color: 'tw-bg-[#27B3F7]',
  },
  {
    title: 'Total Working Hours',
    total: '2930 hr 26 min',
    color: 'tw-bg-[#80D2FB]',
  },
  {
    title: 'Total Late Coming',
    total: '0',
    color: 'tw-bg-[#E53935]',
  },
];
</script>
<template>
  <div
    class="card-dashboard bg-background"
    :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'"
  >
    <div class="tw-text-xl tw-font-bold text-secondary">Attendance Summary</div>
    <div>
      <AttendanceSummaryChart />
    </div>
    <div class="grid-12 tw-gap-4 tw-mt-5">
      <div
        v-for="(item, i) in attendanceOptions"
        :key="i"
        class="tw-col-span-6 md:tw-col-span-3"
      >
        <v-card
          color="background"
          flat
          border
          :class="
            configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-100'
          "
        >
          <div class="fcs">
            <div class="tw-w-1.5 tw-h-[5.5em]" :class="item.color" />
            <v-card-text>
              <div>
                <div class="text-primary-200 tw-text-xs md:tw-text-sm">
                  {{ item.title }}
                </div>
                <div class="text-secondary md:tw-text-lg tw-font-bold tw-mt-1">
                  {{ item.total }}
                </div>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
