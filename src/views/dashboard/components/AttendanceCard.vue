<script setup lang="ts">
import { useConfig } from '@/store';
import DividerDashboard from '@/components/DividerDashboard.vue';

/** Config Store */
const configStore = useConfig();

const attendanceToday = [
  {
    type: 'Clock In',
    time: '07:00',
  },
  {
    type: 'Clock Out',
    time: '18:00',
  },
];
</script>
<template>
  <div
    class="card-dashboard bg-background"
    :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'"
  >
    <div>
      <div class="tw-text-xl tw-font-bold text-secondary">
        Today's Attendance
      </div>
      <DividerDashboard class="tw-my-2" />
      <div class="grid-12 tw-gap-4">
        <div
          v-for="(attendance, i) in attendanceToday"
          :key="i"
          class="tw-col-span-6"
        >
          <v-card
            color="background"
            flat
            border
            :class="
              configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-100'
            "
          >
            <div
              class="tw-h-2"
              :class="attendance.type == 'Clock In' ? 'bg-success' : 'bg-error'"
            />
            <v-card-text>
              <div>
                <div class="text-primary-200 tw-text-sm">
                  {{ attendance.type }}
                </div>
                <div class="text-secondary tw-text-xl tw-font-bold tw-mt-1">
                  {{ attendance.time }}
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
