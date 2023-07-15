<script setup lang="ts">
import GoogleIcon from '@/assets/img/google.png';
import LinkeinIcon from '@/assets/img/linkedin.png';
</script>
<template>
  <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-mt-5">
    <div class="tw-col-span-1">
      <div class="button-social-media">
        <div class="tw-flex-none">
          <v-img :src="GoogleIcon" height="22" />
        </div>
        <div class="label-social-media text-secondary-dark">Google</div>
      </div>
    </div>
    <div class="tw-col-span-1">
      <div class="button-social-media">
        <div class="tw-flex-none">
          <v-img :src="LinkeinIcon" height="22" />
        </div>
        <div class="label-social-media text-secondary-dark">Linked In</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
