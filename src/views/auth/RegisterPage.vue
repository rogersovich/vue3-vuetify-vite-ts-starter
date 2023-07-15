<script setup lang="ts">
import { useRouter } from 'vue-router';
import LogoAxdif from '@/assets/svg/logo-axdif.svg';

const router = useRouter();
</script>

<template>
  <div
    class="tw-flex tw-justify-start tw-items-end tw-h-screen tw-py-4 tw-px-6"
  >
    <div>
      <div><LogoAxdif width="150" /></div>

      <div class="text-secondary-blue-dark tw-my-8">
        <p class="tw-font-extrabold tw-text-xl tw-mb-2">
          Manage all your employee efficiently
        </p>
        <p class="tw-font-medium tw-text-base">
          Let’s get you all set up so you can verify your personal account and
          begin setting up your profile
        </p>
      </div>

      <v-btn variant="flat" color="secondary-red" @click="router.push('Login')">
        Submit
      </v-btn>
    </div>
  </div>
</template>

<style scoped></style>
