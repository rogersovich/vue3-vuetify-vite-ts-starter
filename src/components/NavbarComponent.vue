<script setup lang="ts">
import { ref } from 'vue';
import { NAVBAR_OPTIONS } from '@/constant/navbar';

const emit = defineEmits(['toggleSubNav']);

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
</script>
<template>
  <div class="tw-flex tw-items-center tw-gap-3 font-open-sans">
    <div v-for="(nav, i) in NAVBAR_OPTIONS" :key="i" class="tw-col-span-2">
      <v-btn
        block
        size="large"
        :variant="navbarKey == nav.key ? 'flat' : 'text'"
        :color="navbarKey == nav.key ? '#F4F6FF' : '#888FB0'"
        :class="`${navbarKey == nav.key ? '' : 'hover:tw-bg-[#F4F6FF]'}`"
        class="focus:tw-bg-[#E1F4FE] focus:tw-text-[#0796E5]"
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
