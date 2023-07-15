<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import BannerImg1 from '@/assets/img/banner-auth-1.png';
import BannerImg2 from '@/assets/img/banner-auth-2.png';
import BannerImg3 from '@/assets/img/banner-auth-3.png';
import LoginIllus from '@/assets/img/dashboard.png';

const route = useRoute();

const bgClipmask =
  route.name == 'Register'
    ? "tw-bg-[url('@/assets/svg/bg-auth-illustration.svg')]"
    : "tw-bg-[url('@/assets/svg/bg-auth-illustration-full.svg')]";

const indexBanner = ref(0);
const banners = [
  {
    title: `A few clicks away from \n being a part of Axdif`,
    subtitle: `Manage Task Easily & Efficiently`,
    desc: 'Increase employee productivity and performance in a measurable and precision system in one application.',
    img: BannerImg1,
  },
  {
    title: 'A few clicks away from \n being a part of Axdif',
    subtitle: 'Communication Is Key',
    desc: 'Connect with your coworkers anywhere like you are in one workspace. Very simple and fast.',
    img: BannerImg2,
  },
  {
    title: 'A few clicks away from \n being a part of Axdif',
    subtitle: 'Employee Self-Service',
    desc: 'Simplify the administrative affairs of the company where you work wherever and whenever. Let`s get started with all these conveniences',
    img: BannerImg3,
  },
];
</script>
<template>
  <main>
    <v-row align="start" no-gutters class="tw-h-screen">
      <v-col
        :cols="route.name == 'Register' ? 4 : 8"
        class="bg-primary-600 tw-h-screen"
      >
        <div
          :class="bgClipmask"
          class="tw-h-full tw-w-full tw-bg-center tw-bg-cover"
        >
          <div class="tw-flex tw-justify-center tw-items-center tw-h-full">
            <div v-if="route.name == 'Register'">
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
                  <v-carousel-item v-for="(banner, i) in banners" :key="i">
                    <div class="tw-px-20">
                      <div
                        class="tw-text-center tw-font-bold tw-text-3xl tw-whitespace-pre"
                      >
                        {{ banner.title }}
                      </div>
                      <div
                        class="tw-flex tw-justify-center tw-items-center tw-py-6"
                      >
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
              <div
                class="tw-flex tw-justify-center tw-items-center tw-gap-4 tw-mt-3"
              >
                <template v-for="(dot, i) in banners" :key="i">
                  <button
                    :class="`${
                      i == indexBanner
                        ? 'tw-w-12 bg-primary-900'
                        : 'tw-w-4 tw-bg-white'
                    }`"
                    class="tw-h-4 tw-rounded-full tw-cursor-pointer"
                    @click="indexBanner = i"
                  />
                </template>
              </div>
              <div class="tw-flex" />
            </div>
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
  </main>
</template>

<style scoped></style>
