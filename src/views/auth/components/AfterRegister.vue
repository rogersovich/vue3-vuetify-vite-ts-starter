<script setup lang="ts">
import { useRouter } from 'vue-router';

import VerifAccount from '@/assets/img/verif-acount.png';
import LoginAccount from '@/assets/img/login-account.png';
import SetupData from '@/assets/img/setup-data.png';

const router = useRouter();
</script>
<template>
  <div class="tw-text-center tw-w-full">
    <div class="tw-inline-flex tw-mr-24">
      <div class="tw-my-12">
        <div>
          <div class="tw-flex tw-gap-6 tw-items-center">
            <div class="tw-flex">
              <v-img :src="VerifAccount" height="100" width="100" />
            </div>
            <div class="tw-text-left">
              <p class="text-secondary-dark tw-font-bold tw-text-2xl">
                Verify your account
              </p>
              <p class="text-secondary-gray tw-font-medium tw-mt-1">
                A verification link has been
                <br />
                sent to your email account
              </p>
            </div>
          </div>
        </div>
        <div class="tw-relative">
          <div
            class="tw-w-[50px] tw-h-[50px] tw-border-dashed tw-border-l-4 tw-border-b-4 tw-border-[#2B427C] tw-absolute tw-left-12 tw-top-6"
          />
        </div>
        <div class="tw-ml-[100px] tw-mt-12">
          <div class="tw-flex tw-gap-6 tw-items-center">
            <div class="tw-flex">
              <v-img :src="LoginAccount" height="100" width="100" />
            </div>
            <div class="tw-text-left">
              <p class="text-secondary-dark tw-font-bold tw-text-2xl">
                Login to your account
              </p>
              <p class="text-secondary-gray tw-font-medium tw-mt-1">
                Login to your Axdif account
              </p>
            </div>
          </div>
        </div>
        <div class="tw-relative">
          <div
            class="tw-w-[50px] tw-h-[50px] tw-border-dashed tw-border-l-4 tw-border-b-4 tw-border-[#2B427C] tw-absolute tw-left-32 tw-top-6"
          />
        </div>
        <div class="tw-ml-[200px] tw-mt-12">
          <div class="tw-flex tw-gap-6 tw-items-center">
            <div class="tw-flex">
              <v-img :src="SetupData" height="100" width="100" />
            </div>
            <div class="tw-text-left">
              <p class="text-secondary-dark tw-font-bold tw-text-2xl">
                Setup your data
              </p>
              <p class="text-secondary-gray tw-font-medium tw-mt-1">
                Input your employee data and get
                <br />
                the ease of managing employee
              </p>
            </div>
          </div>
        </div>

        <div class="tw-mt-8">
          <v-btn
            variant="flat"
            color="secondary-red"
            type="submit"
            class="tw-px-6"
            size="large"
            @click="router.push('Login')"
          >
            Login to Axdif
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
