<script setup lang="ts">
import { toRef } from 'vue';
import { useDisplay } from 'vuetify';

import { useConfig } from '@/store';
import type { TaskType } from '@/types/task';
import { getColorChip } from '@/helpers/getFormatColor';

// Props
const props = defineProps({
  task: {
    required: true,
    type: Object as () => TaskType,
  },
});
const task = toRef(props, 'task');

// Emit
const emits = defineEmits(['selected']);

// Breakpoints
// eslint-disable-next-line no-unused-vars
const { mobile } = useDisplay();

/** Config Store */
const configStore = useConfig();
</script>
<template>
  <Transition name="slide-fade">
    <v-card
      color="background"
      flat
      border
      class="tw-p-4"
      :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-100'"
      @click="emits('selected', { title: task.title, status: 'scheduled' })"
    >
      <div class="grid-12 tw-items-center tw-gap-2">
        <div class="tw-col-span-12 md:tw-col-span-6">
          <div class="tw-text-[#808D93] tw-text-sm">
            {{ task.title }}
          </div>
          <div
            class="tw-font-bold tw-text-lg text-secondary tw-mt-1 md:tw-mt-2"
          >
            {{ task.subtitle }}
          </div>
        </div>
        <div class="tw-col-span-12 md:tw-col-span-6">
          <div class="grid-12 tw-items-center tw-gap-3 md:tw-gap-0">
            <div
              class="md:tw-col-start-2 tw-col-span-4 fcc tw-gap-4 md:tw-gap-6"
            >
              <div class="fcs tw-gap-2 md:tw-gap-1">
                <v-icon icon="mdi-attachment" color="primary-200" :size="20" />
                <div class="tw-text-sm text-primary-200">
                  {{ task.total_task }}
                </div>
              </div>
              <div class="fcs tw-gap-2 md:tw-gap-1">
                <v-icon
                  :size="15"
                  icon="mdi-comment-outline"
                  color="primary-200"
                />
                <div class="tw-text-sm text-primary-200">
                  {{ task.total_comment }}
                </div>
              </div>
            </div>
            <div class="tw-col-span-3 fcc">
              <v-chip
                :size="'small'"
                :color="getColorChip(task.level)"
                class="tw-w-full fcc"
              >
                {{ task.level }}
              </v-chip>
            </div>
            <div class="tw-col-span-4">
              <div class="fcc tw-gap-2">
                <v-icon
                  :size="15"
                  icon="mdi-calendar-blank-outline"
                  color="primary-200"
                />
                <div class="tw-text-xs text-primary-200">
                  {{ task.date_scheduled }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
