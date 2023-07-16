<script setup lang="ts">
import { useRouter } from 'vue-router';

import GoogleIcon from '@/assets/img/google.png';
import LinkeinIcon from '@/assets/img/linkedin.png';
import SocialButton from '@/components/SocialButton.vue';

const router = useRouter();
</script>
<template>
  <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-mt-5">
    <div class="tw-col-span-1">
      <SocialButton
        :icon="GoogleIcon"
        title="Google"
        @on-submit="router.push({ name: 'Dashboard' })"
      />
    </div>
    <div class="tw-col-span-1">
      <SocialButton
        :icon="LinkeinIcon"
        title="Linked In"
        @on-submit="router.push({ name: 'Dashboard' })"
      />
    </div>
  </div>
</template>

<style scoped></style>
