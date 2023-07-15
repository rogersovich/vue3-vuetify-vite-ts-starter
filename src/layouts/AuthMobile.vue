<script setup lang="ts">
import { useRoute } from 'vue-router';
import LogoAxdif from '@/assets/svg/logo-axdif.svg';

const route = useRoute();
</script>
<template>
  <div>
    <div v-if="route.name == 'Register'">
      <v-app-bar color="#fff" density="compact" class="tw-py-3">
        <v-app-bar-title>
          <div><LogoAxdif width="120" /></div>
        </v-app-bar-title>
      </v-app-bar>
    </div>
    <div v-else class="tw-bg-white tw-px-4 tw-py-6">
      <div><LogoAxdif width="150" /></div>
    </div>
  </div>
</template>

<style scoped></style>
