<script setup lang="ts">
import { ref } from 'vue';

import LogoAxdif from '@/assets/svg/logo-axdif.svg';
import AfterRegister from './components/AfterRegister.vue';
import RegisterForm from './components/RegisterForm.vue';

const isRegister = ref(false);
</script>

<template>
  <div
    class="tw-flex tw-justify-start tw-items-center tw-h-screen tw-py-6 tw-px-20 tw-w-full"
  >
    <div class="tw-w-full">
      <div><LogoAxdif width="150" /></div>

      <div v-if="!isRegister">
        <div class="text-secondary-blue-dark tw-my-10">
          <p class="tw-font-extrabold tw-text-2xl tw-mb-2">
            Manage all your employee efficiently
          </p>
          <p class="tw-font-medium tw-text-base">
            Let’s get you all set up so you can verify your personal account and
            <br />
            begin setting up your profile
          </p>
        </div>
        <RegisterForm @update-is-register="value => (isRegister = value)" />
      </div>
      <AfterRegister v-else />
      <div class="text-secondary-blue-dark tw-mt-8 tw-text-sm">
        © Copyright {{ new Date().getFullYear() }}. All Right Reserved.
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./validation/auth
