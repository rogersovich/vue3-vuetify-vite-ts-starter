<script setup lang="ts">
import { useDisplay } from 'vuetify';

import { useConfig } from '@/store';
import { TASK_DUE_SOON } from '@/constant/dashboard';
import DividerDashboard from '@/components/general/DividerDashboard.vue';
import { getColorChip } from '@/helpers/getFormatColor';

// Breakpoints
const { mobile } = useDisplay();

/** Config Store */
const configStore = useConfig();
</script>
<template>
  <div
    class="card-dashboard bg-background"
    :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'"
  >
    <div class="fcb text-secondary">
      <div class="tw-text-lg md:tw-text-xl tw-font-bold">Task Due Soon</div>
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
    <div class="grid-12 tw-gap-4">
      <div v-for="(item, i) in TASK_DUE_SOON" :key="i" class="tw-col-span-12">
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
            <div class="tw-col-span-12 md:tw-col-span-7">
              <div class="tw-text-[#808D93] tw-text-xs md:tw-text-sm">
                {{ item.title }}
              </div>
              <div
                class="tw-font-bold tw-text-base md:tw-text-lg text-secondary tw-mt-1 md:tw-mt-2"
              >
                {{ item.subtitle }}
              </div>
            </div>
            <div class="tw-col-span-12 md:tw-col-span-5">
              <div class="grid-12 tw-items-center tw-gap-3">
                <div class="tw-col-span-4 fcb">
                  <div class="fcs tw-gap-1 md:tw-gap-2.5">
                    <v-icon
                      icon="mdi-attachment"
                      color="primary-200"
                      :size="mobile ? 16 : 20"
                    />
                    <div class="tw-text-xs md:tw-text-sm text-primary-200">
                      {{ item.total_task }}
                    </div>
                  </div>
                  <div class="fcs tw-gap-1 md:tw-gap-2.5">
                    <v-icon
                      :size="mobile ? 12 : 15"
                      icon="mdi-comment-outline"
                      color="primary-200"
                    />
                    <div class="tw-text-xs md:tw-text-sm text-primary-200">
                      {{ item.total_comment }}
                    </div>
                  </div>
                </div>
                <div v-if="!mobile" class="tw-col-span-1 fce">
                  <v-divider vertical class="tw-opacity-90 tw-h-5" />
                </div>
                <div class="tw-col-span-4 md:tw-col-span-3 fcc">
                  <v-chip
                    :size="mobile ? 'x-small' : 'small'"
                    :color="getColorChip(item.level)"
                  >
                    {{ item.level }}
                  </v-chip>
                </div>
                <div class="tw-col-span-4">
                  <div class="fcs tw-gap-2">
                    <v-icon
                      :size="mobile ? 12 : 15"
                      icon="mdi-calendar-blank-outline"
                      color="primary-200"
                    />
                    <div class="tw-text-[10px] md:tw-text-xs text-primary-200">
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
