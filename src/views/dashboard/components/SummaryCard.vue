<script setup lang="ts">
import { ref } from 'vue';

import { useConfig } from '@/store';
import { SUMMARY } from '@/constant/dashboard';
import { formatDatePicker } from '@/helpers/getFormatDate';
import DividerDashboard from '@/components/DividerDashboard.vue';

/** Config Store */
const configStore = useConfig();

const date = ref({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
});
const dp = ref();

const selectDate = () => {
  dp.value.selectDate();
};
</script>
<template>
  <div
    class="card-dashboard bg-background"
    :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'"
  >
    <div class="fcb text-secondary">
      <div class="tw-text-lg md:tw-text-xl tw-font-bold">Summary</div>
      <div class="fcs tw-gap-4">
        <div class="tw-text-sm tw-hidden md:tw-block">Periode</div>
        <VueDatePicker
          ref="dp"
          v-model="date"
          month-picker
          :dark="configStore.theme"
        >
          <template #trigger>
            <v-btn
              border
              variant="text"
              append-icon="mdi-calendar-blank-outline"
            >
              <div class="tw-font-semibold tw-text-sm">
                {{ formatDatePicker({ month: date.month, year: date.year }) }}
              </div>

              <template #append>
                <v-icon color="primary-500" />
              </template>
            </v-btn>
          </template>
          <template #action-buttons>
            <v-btn variant="flat" color="primary-500" @click="selectDate">
              Select
            </v-btn>
          </template>
        </VueDatePicker>
      </div>
    </div>
    <DividerDashboard class="tw-my-5" />
    <div class="grid-12 tw-gap-2 md:tw-gap-4">
      <div v-for="(item, i) in SUMMARY" :key="i" class="tw-col-span-6 md:tw-col-span-4">
        <v-card
          color="background"
          flat
          border
          class="tw-p-4"
          :class="
            configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-100'
          "
        >
          <div class="tw-text-[#808D93] tw-text-xs md:tw-text-sm">
            {{ item.title }}
          </div>
          <div class="tw-font-bold tw-text-sm md:tw-text-lg text-secondary tw-mt-2">
            {{ item.subtitle }}
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
