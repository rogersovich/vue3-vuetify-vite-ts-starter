<script setup lang="ts">
import { ref } from 'vue';

import { BANNERS } from '@/constant/auth';

const indexBanner = ref(0);
</script>
<template>
  <div>
    <div class="tw-flex tw-justify-center tw-items-center tw-h-full">
      <v-carousel
        v-model="indexBanner"
        cycle
        :continuous="false"
        :show-arrows="false"
        hide-delimiter-background
        hide-delimiters
        height="auto"
      >
        <v-carousel-item v-for="(banner, i) in BANNERS" :key="i">
          <div class="tw-px-20">
            <div
              class="tw-text-center tw-font-bold tw-text-3xl tw-whitespace-pre"
            >
              {{ banner.title }}
            </div>
            <div class="tw-flex tw-justify-center tw-items-center tw-py-6">
              <v-img :src="banner.img" height="400" />
            </div>
            <div
              class="tw-text-center tw-font-bold tw-text-xl tw-whitespace-pre"
            >
              {{ banner.subtitle }}
            </div>
            <div class="tw-text-center tw-text-base">
              {{ banner.desc }}
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="tw-flex tw-justify-center tw-items-center tw-gap-4 tw-mt-3">
      <template v-for="(dot, i) in BANNERS" :key="i">
        <button
          :class="`${
            i == indexBanner ? 'tw-w-12 bg-primary-900' : 'tw-w-4 tw-bg-white'
          }`"
          class="tw-h-4 tw-rounded-full tw-cursor-pointer"
          @click="indexBanner = i"
        />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
