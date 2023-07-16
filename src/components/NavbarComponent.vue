<script setup lang="ts">
import { ref } from 'vue';
import { NAVBAR_OPTIONS } from '@/constant/navbar';
import { useConfig } from '@/store';

const emit = defineEmits(['toggleSubNav']);

/** Config Store */
const configStore = useConfig();

const navbarKey = ref('overview');

const onClickNav = (key: string) => {
  const findNav = NAVBAR_OPTIONS.filter(item => item.key == key)[0];
  if (findNav.children != null && findNav.route == null) {
    emit('toggleSubNav', {
      title: findNav.title,
      children: findNav.children,
    });
  }
};

const formatColor = (nav: string) => {
  if (configStore.theme) {
    return navbarKey.value == nav ? '#364168' : '#8990A6';
  } else {
    return navbarKey.value == nav ? '#F4F6FF' : '#888FB0';
  }
};

const formatClass = (nav: string) => {
  if (configStore.theme) {
    return `${
      navbarKey.value == nav
        ? ''
        : 'hover:tw-bg-[#364168] focus:tw-bg-[#364168] focus:tw-text-[#fff]'
    }`;
  } else {
    return `${
      navbarKey.value == nav
        ? ''
        : 'hover:tw-bg-[#F4F6FF] focus:tw-bg-[#E1F4FE] focus:tw-text-[#0796E5]'
    }`;
  }
};
</script>
<template>
  <div class="tw-flex tw-items-center tw-gap-3 font-open-sans">
    <div v-for="(nav, i) in NAVBAR_OPTIONS" :key="i" class="tw-col-span-2">
      <v-btn
        block
        size="large"
        :variant="navbarKey == nav.key ? 'flat' : 'text'"
        :color="formatColor(nav.key)"
        :class="formatClass(nav.key)"
        :append-icon="nav.key == 'submission' ? 'mdi-chevron-down' : ''"
        @click="onClickNav(nav.key)"
      >
        <div
          class="tw-font-bold"
          :class="`${navbarKey == nav.key ? 'text-secondary-blue-dark' : ''}`"
        >
          {{ nav.title }}
        </div>
      </v-btn>
    </div>
  </div>
</template>

<style scoped></style>
