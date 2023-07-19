<script setup lang="ts">
import { ref } from 'vue';
import { NAVBAR_OPTIONS } from '@/constant/navbar';
import { useConfig } from '@/store';
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify';

const emit = defineEmits(['toggleSubNav']);

/** Config Store */
const configStore = useConfig();

const router = useRouter();

const navbarKey = ref('overview');

const { mobile } = useDisplay();

const subNav = ref('overview');

const onClickNav = (key: string) => {
  navbarKey.value = key;
  const findNav = NAVBAR_OPTIONS.filter(item => item.key == key)[0];
  if (findNav.route != null) {
    router.push({ name: findNav.route });
  }
  if (findNav.children != null && findNav.route == null) {
    emit('toggleSubNav', {
      title: findNav.title,
      children: findNav.children,
    });
  }
};

const onSelectSubnav = (key: string) => {
  subNav.value = key;
  const findNav = NAVBAR_OPTIONS.filter(item => item.key == key)[0];
  if (findNav.route != null) {
    router.push({ name: findNav.route });
  }
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
  <div v-if="!mobile" class="tw-flex tw-items-center tw-gap-3 font-open-sans">
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
          :class="`${navbarKey == nav.key ? 'text-primary-500' : ''}`"
        >
          {{ nav.title }}
        </div>
      </v-btn>
    </div>
  </div>
  <div v-else class="tw-w-full tw-text-center tw-mr-4">
    <v-menu width="200" :offset="[0, 30]" origin="overlap">
      <template #activator="{ props }">
        <v-btn
          color="secondary"
          size="large"
          variant="text"
          append-icon="mdi-chevron-down"
          v-bind="props"
        >
          <div class="tw-font-bold">
            {{ NAVBAR_OPTIONS.filter(item => item.key == subNav)[0].title }}
          </div>
        </v-btn>
      </template>
      <v-list class="tw-shadow-lg tw-text-center">
        <v-list-item
          v-for="(item, index) in NAVBAR_OPTIONS"
          :key="index"
          :value="index"
          @click="onSelectSubnav(item.key)"
        >
          <v-list-item-title
            :class="
              subNav == item.key ? 'text-primary-500 tw-font-semibold' : ''
            "
          >
            {{ item.title }}
            <v-icon v-if="item.key == 'submission'" icon="mdi-chevron-down" />
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style scoped></style>
