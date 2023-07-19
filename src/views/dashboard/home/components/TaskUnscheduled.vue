<script setup lang="ts">
import { toRef } from 'vue';
import { useDisplay } from 'vuetify';

import { useConfig } from '@/store';
import type { TaskType } from '@/types/task';
import AttachIcon from '@/assets/img/task/attach.png';
import BranchIcon from '@/assets/img/task/branch.png';
import ChatIcon from '@/assets/img/task/chat.png';
import FileIcon from '@/assets/img/task/file.png';

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

const iconSize = mobile.value ? 18 : 15;
</script>
<template>
  <Transition name="slide-fade">
    <v-card
      color="background"
      flat
      border
      class="tw-p-4"
      :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-100'"
      @click="emits('selected', { title: task.title, status: 'unscheduled' })"
    >
      <div class="grid-12 tw-items-center">
        <div class="tw-col-span-12 md:tw-col-span-6">
          <div class="fcs tw-gap-2">
            <v-chip size="small" color="primary-200">
              <span class="tw-capitalize tw-font-bold">
                {{ task.status }}
              </span>
            </v-chip>
            <b class="text-primary-200">.</b>
            <div class="fcs tw-gap-1 text-primary-200 tw-text-sm">
              <div>
                {{ task.type }}
              </div>
              <div class="tw-text-[14px]">></div>
              <div>
                {{ task.progress_status }}
              </div>
            </div>
          </div>
          <div
            class="tw-font-bold tw-text-lg text-secondary tw-mt-1 md:tw-mt-2"
          >
            {{ task.subtitle }}
          </div>
        </div>
        <div class="tw-col-span-12 md:tw-col-span-6">
          <div class="grid-12 tw-items-center tw-gap-0">
            <div
              class="tw-col-span-5 md:tw-col-span-6 fc md:tw-justify-center tw-gap-2"
            >
              <div class="tw-text-[12.5px] md:tw-text-xs text-primary-200">
                {{ task.date_created }}
              </div>
              <div class="text-primary-200 tw-font-bold tw-text-base tw-mb-2">
                .
              </div>
            </div>
            <div
              class="tw-col-span-7 md:tw-col-span-6 fc tw-justify-start md:tw-justify-end tw-gap-2"
            >
              <div class="fcs tw-gap-1 md:tw-gap-1">
                <v-img :src="BranchIcon" :width="iconSize" :height="iconSize" />
                <div class="tw-text-xs tw-text-[#EC6727]">2</div>
              </div>
              <div class="text-primary-200 tw-font-bold tw-text-base tw-mb-2">
                .
              </div>
              <div class="fcs tw-gap-1 md:tw-gap-1">
                <v-img :src="AttachIcon" :width="iconSize" :height="iconSize" />
                <div class="tw-text-xs tw-text-[#2196F3]">
                  {{ task.total_comment }}
                </div>
              </div>
              <div class="text-primary-200 tw-font-bold tw-text-base tw-mb-2">
                .
              </div>
              <div class="fcs tw-gap-1 md:tw-gap-1">
                <v-img :src="FileIcon" :width="iconSize" :height="iconSize" />
                <div class="tw-text-xs tw-text-[#4A148C]">
                  {{ task.total_comment }}
                </div>
              </div>
              <div class="text-primary-200 tw-font-bold tw-text-base tw-mb-2">
                .
              </div>
              <div class="fcs tw-gap-1 md:tw-gap-1">
                <v-img :src="ChatIcon" :width="iconSize" :height="iconSize" />
                <div class="tw-text-xs tw-text-[#004D40]">
                  {{ task.total_comment }}
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
