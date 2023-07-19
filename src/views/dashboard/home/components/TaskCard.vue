<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useConfig } from '@/store';
// import { TASK_DUE_SOON } from '@/constant/dashboard';
import DividerDashboard from '@/components/general/DividerDashboard.vue';
import TaskScheduled from './TaskScheduled.vue';
import type { TaskType } from '@/types/task';
import TaskUnscheduled from './TaskUnscheduled.vue';

/** Config Store */
const configStore = useConfig();

// Tasks
const TASK_DUE_SOON: Ref<TaskType[]> = ref([
  {
    status: 'unscheduled',
    progress_status: 'On Progess',
    type: 'UI/UX Design',
    title: '[Wms][Web][Task] Create Goals Design',
    subtitle: `UI/UX Designer`,
    total_task: 44,
    total_comment: 1,
    level: 'Medium',
    date_scheduled: '06 Aug 2021',
    date_created: '10 Mar 21 at 13:30',
  },
  {
    status: 'unscheduled',
    progress_status: 'On Progess',
    type: 'Frontend',
    title: '[Wms][Web][Task] Integeration API',
    subtitle: `Front End Dev`,
    total_task: 60,
    total_comment: 5,
    level: 'Hard',
    date_scheduled: '22 Jan 2022',
    date_created: '10 Mar 21 at 13:30',
  },
  {
    status: 'unscheduled',
    progress_status: 'On Progess',
    type: 'Backend',
    title: '[Wms][Web][Task] Export Database',
    subtitle: `Backend End Dev`,
    total_task: 17,
    total_comment: 3,
    level: 'Easy',
    date_scheduled: '11 Des 2023',
    date_created: '10 Mar 21 at 13:30',
  },
]);

const onSelected = ({ title, status }: { title: string; status: string }) => {
  const index = TASK_DUE_SOON.value.findIndex(item => item.title === title);

  TASK_DUE_SOON.value[index].status = status;
};
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
        <TaskScheduled
          v-show="item.status == 'unscheduled'"
          :task="item"
          @selected="val => onSelected(val)"
        />
        <TaskUnscheduled
          v-show="item.status == 'scheduled'"
          :task="item"
          @selected="val => onSelected(val)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
