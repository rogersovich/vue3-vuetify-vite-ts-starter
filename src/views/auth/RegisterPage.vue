<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

import LogoAxdif from '@/assets/svg/logo-axdif.svg';
import AfterRegister from './components/AfterRegister.vue';
import RegisterForm from './components/RegisterForm.vue';

const { mobile } = useDisplay();

const bgClipmask = "tw-bg-[url('@/assets/svg/bg-auth-illustration-full.svg')]";

const isRegister = ref(false);
</script>

<template>
  <div v-if="mobile" class="bg-primary-600 tw-min-h-screen">
    <v-app-bar color="#fff" density="compact" class="tw-py-3" flat>
      <v-app-bar-title>
        <div><LogoAxdif width="120" /></div>
      </v-app-bar-title>
    </v-app-bar>
    <div
      :class="bgClipmask"
      class="tw-h-full tw-w-full tw-bg-center tw-bg-cover tw-p-4"
    >
      <div class="tw-text-center tw-font-bold tw-text-3xl tw-py-6">
        A few clicks away from being a part of Axdif
      </div>
      <div
        class="tw-flex tw-justify-start tw-items-center tw-py-6 tw-px-6 md:tw-px-20 tw-w-full tw-bg-white tw-rounded-md"
      >
        <div class="tw-w-full">
          <div v-if="!mobile"><LogoAxdif width="150" /></div>

          <div v-if="!isRegister">
            <div class="text-secondary-blue-dark tw-mb-10 md:tw-my-10">
              <p class="tw-font-extrabold tw-text-2xl tw-mb-2">
                Manage all your employee efficiently
              </p>
              <p class="tw-font-medium tw-text-base">
                Let’s get you all set up so you can verify your personal account
                and
                <br />
                begin setting up your profile
              </p>
            </div>
            <RegisterForm @update-is-register="value => (isRegister = value)" />
          </div>
          <AfterRegister v-else />
        </div>
      </div>
      <div
        class="tw-text-white tw-my-6 tw-text-sm tw-text-center md:tw-text-left"
      >
        © Copyright {{ new Date().getFullYear() }}. All Right Reserved.
      </div>
    </div>
  </div>
  <div v-else>
    <div
      class="tw-flex tw-justify-start tw-items-center tw-min-h-screen tw-py-6 tw-px-6 md:tw-px-20 tw-w-full"
    >
      <div class="tw-w-full">
        <div v-if="!mobile"><LogoAxdif width="150" /></div>

        <div v-if="!isRegister">
          <div class="text-secondary-blue-dark tw-mb-10 md:tw-my-10">
            <p class="tw-font-extrabold tw-text-2xl tw-mb-2">
              Manage all your employee efficiently
            </p>
            <p class="tw-font-medium tw-text-base">
              Let’s get you all set up so you can verify your personal account
              and
              <br />
              begin setting up your profile
            </p>
          </div>
          <RegisterForm @update-is-register="value => (isRegister = value)" />
        </div>
        <AfterRegister v-else />
        <div
          class="text-secondary-blue-dark tw-mt-8 tw-text-sm tw-text-center md:tw-text-left"
        >
          © Copyright {{ new Date().getFullYear() }}. All Right Reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
