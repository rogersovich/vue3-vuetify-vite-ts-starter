<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify';

import VerifAccount from '@/assets/img/verif-acount.png';
import LoginAccount from '@/assets/img/login-account.png';
import SetupData from '@/assets/img/setup-data.png';

const router = useRouter();

const { mobile } = useDisplay();
</script>
<template>
  <div class="tw-text-center tw-w-full">
    <div class="md:tw-inline-flex md:tw-mr-24">
      <div class="tw-my-2 md:tw-my-12">
        <div>
          <div class="md:tw-flex md:tw-gap-6 md:tw-items-center">
            <div class="tw-flex">
              <v-img :src="VerifAccount" height="100" width="100" />
            </div>
            <div class="tw-text-center md:tw-text-left">
              <p
                class="text-secondary-dark tw-font-bold tw-text-xl md:tw-text-2xl"
              >
                Verify your account
              </p>
              <p
                class="text-secondary-gray tw-font-medium tw-mt-1 tw-text-sm md:tw-text-base"
              >
                A verification link has been
                <br />
                sent to your email account
              </p>
            </div>
          </div>
        </div>
        <div class="tw-relative">
          <div
            v-if="!mobile"
            class="tw-w-[50px] tw-h-[50px] tw-border-dashed tw-border-l-4 tw-border-b-4 tw-border-[#2B427C] tw-absolute tw-left-12 tw-top-6"
          />
          <div
            v-else
            class="tw-w-[40px] tw-h-[40px] tw-border-dashed tw-border-l-4 tw-border-[#2B427C] tw-absolute tw-left-[10.2em] tw-top-7"
          />
        </div>
        <div class="md:tw-ml-[100px] tw-mt-24 md:tw-mt-12">
          <div class="md:tw-flex md:tw-gap-6 md:tw-items-center">
            <div class="tw-flex">
              <v-img :src="LoginAccount" height="100" width="100" />
            </div>
            <div class="tw-text-center md:tw-text-left">
              <p
                class="text-secondary-dark tw-font-bold tw-text-xl md:tw-text-2xl"
              >
                Login to your account
              </p>
              <p
                class="text-secondary-gray tw-font-medium tw-mt-1 tw-text-sm md:tw-text-base"
              >
                Login to your Axdif account
              </p>
            </div>
          </div>
        </div>
        <div class="tw-relative">
          <div
            v-if="!mobile"
            class="tw-w-[50px] tw-h-[50px] tw-border-dashed tw-border-l-4 tw-border-b-4 tw-border-[#2B427C] tw-absolute tw-left-32 tw-top-6"
          />
          <div
            v-else
            class="tw-w-[40px] tw-h-[40px] tw-border-dashed tw-border-l-4 tw-border-[#2B427C] tw-absolute tw-left-[10.2em] tw-top-7"
          />
        </div>
        <div class="md:tw-ml-[200px] tw-mt-24 md:tw-mt-12">
          <div class="md:tw-flex md:tw-gap-6 md:tw-items-center">
            <div class="tw-flex">
              <v-img :src="SetupData" height="100" width="100" />
            </div>
            <div class="tw-text-center md:tw-text-left">
              <p
                class="text-secondary-dark tw-font-bold tw-text-xl md:tw-text-2xl"
              >
                Setup your data
              </p>
              <p
                class="text-secondary-gray tw-font-medium tw-mt-1 tw-text-sm md:tw-text-base"
              >
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
