<script setup lang="ts">
import { useConfig } from '@/store';
import DividerDashboard from '@/components/DividerDashboard.vue';
import { SUMMARY } from '@/constant/dashboard';

/** Config Store */
const configStore = useConfig();
</script>
<template>
  <div
    class="card-dashboard bg-background"
    :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'"
  >
    <div class="fcb text-secondary">
      <div class="tw-text-xl tw-font-bold">Summary</div>
      <div class="fcs tw-gap-4">
        <div class="tw-text-sm">Periode</div>
        <v-btn border variant="text" append-icon="mdi-calendar-blank-outline">
          <div class="tw-font-semibold tw-text-sm">November 2023</div>

          <template #append>
            <v-icon color="primary-500" />
          </template>
        </v-btn>
      </div>
    </div>
    <DividerDashboard class="tw-my-5" />
    <div class="grid-12 tw-gap-4">
      <div v-for="(item, i) in SUMMARY" :key="i" class="tw-col-span-4">
        <v-card
          color="background"
          flat
          border
          class="tw-p-4"
          :class="
            configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-100'
          "
        >
          <div class="tw-text-[#808D93] tw-text-sm">
            {{ item.title }}
          </div>
          <div class="tw-font-bold tw-text-lg text-secondary tw-mt-2">
            {{ item.subtitle }}
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
