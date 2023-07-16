<script setup lang="ts">
import { useConfig } from '@/store';
import { useDisplay } from 'vuetify';
import TaskCompletionChart from '@/components/TaskCompletionChart.vue';
import Increase from '@/assets/svg/increase.svg';
import Decrease from '@/assets/svg/decrease.svg';

/** Config Store */
const configStore = useConfig();

const attendanceOptions = [
  {
    title: 'Total Task Completed',
    total: '2400',
    subtitle: 'Last Year : 2000 Task',
    percentage: {
      type: 'profit',
      value: '20%',
    },
  },
  {
    title: 'Most Completed Tasks At',
    total: '185',
    subtitle: 'May 2022',
    percentage: null,
  },
  {
    title: 'Total Task Created',
    total: '1600',
    subtitle: 'Last Year : 1800 Task',
    percentage: {
      type: 'loss',
      value: '20%',
    },
  },
  {
    title: 'Most Completed Tasks At',
    total: 'UI/UX Design',
    subtitle: '240 Task',
    percentage: null,
  },
];

const { smAndDown } = useDisplay();

const formatClass = ({ index }: { index: number }) => {
  let borderWidth = '';
  if (!smAndDown.value) {
    if (index == 0) {
      borderWidth = 'tw-border-r-0';
    } else if (index - 1) {
      borderWidth = 'tw-border-y tw-border-l-0';
    }
  } else {
    borderWidth = 'tw-border';
  }

  let borderRounded = '';
  if (!smAndDown.value) {
    if (index == 0) {
      borderRounded = 'tw-rounded-l-md';
    } else if (attendanceOptions.length - 1 == index) {
      borderRounded = 'tw-rounded-r-md';
    }
  } else {
    borderRounded = 'tw-rounded-md';
  }

  const borderColor = configStore.theme
    ? 'tw-border-[#364168]'
    : 'tw-border-gray-100';
  const full = `${borderWidth} ${borderColor} ${borderRounded}`;
  return full;
};
</script>
<template>
  <div
    class="card-dashboard bg-background"
    :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'"
  >
    <div class="tw-text-xl tw-font-bold text-secondary">
      Task Completion in All Project
    </div>
    <div>
      <TaskCompletionChart />
    </div>
    <div class="grid-12 tw-mt-5 md:tw-px-6 tw-gap-3 md:tw-gap-0">
      <div
        v-for="(item, i) in attendanceOptions"
        :key="i"
        class="tw-col-span-6 md:tw-col-span-3"
      >
        <div
          class="tw-border tw-h-[150px] md:tw-h-[110px] fcc"
          :class="formatClass({ index: i })"
        >
          <div class="fcs">
            <v-card-text>
              <div>
                <div class="fcc tw-gap-2">
                  <div class="text-primary-200 tw-text-[13px] tw-text-center">
                    {{ item.title }}
                  </div>
                  <v-icon
                    size="14"
                    color="primary-500"
                    icon="mdi-information-outline"
                  />
                </div>
                <div class="fcc tw-gap-2 tw-mt-2 tw-mb-1">
                  <div
                    class="text-secondary tw-text-center tw-text-sm md:tw-text-base tw-font-bold"
                  >
                    {{ item.total }}
                  </div>
                  <v-chip
                    v-if="item.percentage != null"
                    size="x-small"
                    :color="
                      item.percentage.type == 'profit' ? '#09A262' : '#E53935'
                    "
                    label
                  >
                    {{ item.percentage.value }}
                    <Increase
                      v-if="item.percentage.type == 'profit'"
                      class="tw-ml-1"
                    />
                    <Decrease v-else class="tw-ml-1" />
                  </v-chip>
                </div>
                <div class="text-secondary tw-text-center">
                  {{ item.subtitle }}
                </div>
              </div>
            </v-card-text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
