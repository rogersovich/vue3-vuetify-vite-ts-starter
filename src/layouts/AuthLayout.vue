<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

import AuthCarousel from '@/components/auth/AuthCarousel.vue';
import LoginIllus from '@/assets/img/dashboard.png';

const route = useRoute();

const { mobile } = useDisplay();

const bgClipmask =
  route.name == 'Register'
    ? "tw-bg-[url('@/assets/svg/bg-auth-illustration.svg')]"
    : "tw-bg-[url('@/assets/svg/bg-auth-illustration-full.svg')]";
</script>
<template>
  <main>
    <template v-if="!mobile">
      <v-row align="start" no-gutters class="tw-min-h-screen">
        <v-col
          :cols="route.name == 'Register' ? 4 : 8"
          class="bg-primary-600 tw-h-screen"
        >
          <div
            :class="bgClipmask"
            class="tw-h-full tw-w-full tw-bg-center tw-bg-cover"
          >
            <div class="tw-flex tw-justify-center tw-items-center tw-h-full">
              <AuthCarousel v-if="route.name == 'Register'" />
              <div v-else>
                <div class="tw-flex tw-justify-center tw-items-center tw-px-6">
                  <v-img :src="LoginIllus" aspect-ratio="16/9" />
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col :cols="route.name == 'Register' ? 8 : 4" class="tw-h-screen">
          <router-view />
        </v-col>
      </v-row>
    </template>
    <div v-else>
      <router-view />
    </div>
  </main>
</template>

<style scoped></style>
