<script setup lang="ts">
import { useConfig } from '@/store';
import DividerDashboard from '@/components/DividerDashboard.vue';
import { TASK_DUE_SOON } from '@/constant/dashboard';

/** Config Store */
const configStore = useConfig();

const colorChip = (level: string) => {
  let color = 'success';
  if (level == 'Medium') {
    color = 'success';
  } else if (level == 'Easy') {
    color = 'primary-500';
  } else {
    color = 'error';
  }

  return color;
};
</script>
<template>
  <div
    class="card-dashboard bg-background"
    :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'"
  >
    <div class="fcb text-secondary">
      <div class="tw-text-xl tw-font-bold">Task Due Soon</div>
      <div>
        <v-btn
          variant="text"
          color="primary-500"
          append-icon="mdi-chevron-right"
        >
          <div class="tw-font-semibold tw-text-sm">See All</div>

          <template #append>
            <v-icon color="primary-500" />
          </template>
        </v-btn>
      </div>
    </div>
    <DividerDashboard class="tw-my-5" />
    <div class="grid-1 tw-gap-4">
      <div v-for="(item, i) in TASK_DUE_SOON" :key="i" class="tw-col-span-4">
        <v-card
          color="background"
          flat
          border
          class="tw-p-4"
          :class="
            configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-100'
          "
        >
          <div class="grid-12 tw-items-center">
            <div class="tw-col-span-7">
              <div class="tw-text-[#808D93] tw-text-sm">
                {{ item.title }}
              </div>
              <div class="tw-font-bold tw-text-lg text-secondary tw-mt-2">
                {{ item.subtitle }}
              </div>
            </div>
            <div class="tw-col-span-5">
              <div class="grid-12 tw-items-center tw-gap-3">
                <div class="tw-col-span-4 fcb">
                  <div class="fcs tw-gap-2.5">
                    <v-icon icon="mdi-attachment" color="primary-200" />
                    <div class="tw-text-sm text-primary-200">
                      {{ item.total_task }}
                    </div>
                  </div>
                  <div class="fcs tw-gap-2.5">
                    <v-icon
                      size="16"
                      icon="mdi-comment-outline"
                      color="primary-200"
                    />
                    <div class="tw-text-sm text-primary-200">
                      {{ item.total_comment }}
                    </div>
                  </div>
                </div>
                <div class="tw-col-span-1 fce">
                  <v-divider vertical class="tw-opacity-90 tw-h-5" />
                </div>
                <div class="tw-col-span-3 fcc">
                  <v-chip size="small" :color="colorChip(item.level)">
                    {{ item.level }}
                  </v-chip>
                </div>
                <div class="tw-col-span-4">
                  <div class="fcs tw-gap-2">
                    <v-icon
                      size="16"
                      icon="mdi-calendar-blank-outline"
                      color="primary-200"
                    />
                    <div class="tw-text-xs text-primary-200">
                      {{ item.date }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
