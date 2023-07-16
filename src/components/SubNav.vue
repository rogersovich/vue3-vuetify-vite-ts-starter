<script setup lang="ts">
import { useConfig } from '@/store';
import type { TChildNav } from '@/types/NavbarTypes';

const props = defineProps({
  navChildren: {
    default: () => [],
    type: Array as () => TChildNav[],
  },
  title: {
    default: null,
    type: String,
  },
});

/** Config Store */
const configStore = useConfig();

const formatClass = () => {
  if (configStore.theme) {
    return 'hover:tw-bg-[#364168] focus:tw-bg-[#0D183D] focus:tw-text-[#fff]';
  } else {
    return 'hover:tw-bg-[#E1F4FE] focus:tw-bg-[#E1F4FE] focus:tw-text-[#0796E5]';
  }
};
</script>
<template>
  <div
    class="tw-absolute tw-left-0 tw-top-[5.9em] tw-z-[9999] tw-w-full tw-p-4 bg-background tw-shadow-md font-open-sans"
  >
    <div class="tw-px-20">
      <div>
        <div class="tw-text-xl tw-font-bold text-primary-600">
          {{ props.title }}
        </div>
      </div>
      <v-divider
        class="tw-opacity-50 tw-border tw-my-3"
        :class="
          configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'
        "
      />
      <div class="grid-12 tw-gap-x-6 tw-gap-y-6 text-secondary-blue-dark">
        <div
          v-for="(child, i) in props.navChildren"
          :key="i"
          class="tw-col-span-3"
        >
          <button
            type="button"
            class="tw-p-4 tw-rounded tw-cursor-pointer"
            :class="formatClass()"
          >
            <div class="tw-flex tw-items-center tw-gap-4">
              <div>
                <v-img :src="child.icon" width="35" />
              </div>
              <div class="tw-font-bold tw-text-lg">
                {{ child.title }}
              </div>
            </div>
            <div class="tw-text-sm tw-mt-3 tw-text-left">
              {{ child.desc }}
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
