<script setup lang="ts">
import LogoAxdif from '@/assets/svg/logo-axdif.svg';
import LoginSocialMedia from './components/LoginSocialMedia.vue';
import LoginForm from './components/LoginForm.vue';
import CustomDivider from '@/components/CustomDivider.vue';
// import { useRouter } from 'vue-router';
// const router = useRouter();
</script>

<template>
  <div
    class="tw-flex tw-justify-start tw-items-center tw-h-screen tw-py-6 tw-px-10 tw-w-full"
  >
    <div class="tw-w-full">
      <div><LogoAxdif width="150" /></div>
      <div class="text-secondary-blue-dark tw-my-10">
        <p class="tw-font-extrabold tw-text-2xl tw-mb-2">
          Login to your Account
        </p>
        <p class="tw-font-medium tw-text-lg">
          Hi, welcome back. Select method to login
        </p>
        <LoginSocialMedia />

        <CustomDivider>
          <template #default>
            <div class="tw-text-xs tw-text-center">Or continue with email</div>
          </template>
        </CustomDivider>

        <LoginForm />
        <br />
        <div class="text-secondary-blue-dark tw-mt-8 tw-text-sm tw-text-center">
          © Copyright {{ new Date().getFullYear() }}. All Right Reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
