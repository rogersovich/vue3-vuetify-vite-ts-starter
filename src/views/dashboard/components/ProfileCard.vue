<script setup lang="ts">
import { useConfig } from '@/store';
import BannerImg from '@/assets/img/banner-profile.png';
import Avatar from '@/assets/img/avatar.png';
import DividerDashboard from '@/components/DividerDashboard.vue';

/** Config Store */
const configStore = useConfig();

const ProfilesDatas = [
  {
    title: 'Employee ID',
    subtitle: 'PT - GOO34',
  },
  {
    title: 'Position',
    subtitle: 'Senior Front-End Developer',
  },
  {
    title: 'Join Date',
    subtitle: '23 Feb 2018',
  },
  {
    title: 'Years of Service',
    subtitle: '4 Years 5 Months 2 Days',
  },
];
</script>
<template>
  <div class="tw-w-full">
    <div
      class="card-dashboard bg-background tw-p-0"
      :class="configStore.theme ? 'tw-border-[#364168]' : 'tw-border-gray-200'"
    >
      <v-img :src="BannerImg" height="200px" class="tw-rounded-t-md" cover />
      <div class="tw-py-4 tw-px-6 tw-relative">
        <div class="tw-absolute tw--top-14 tw-inset-x-0 tw-text-center">
          <v-avatar :image="Avatar" size="100" />
        </div>
        <div class="tw-mt-12 tw-text-center text-secondary">
          <div class="tw-font-bold tw-text-lg">John Doe</div>
          <div class="tw-mt-1 fcc tw-gap-2.5">
            <v-icon size="14" icon="mdi-domain" color="primary-200" />
            <div class="tw-text-sm">Google Indonesia</div>
          </div>
        </div>
        <DividerDashboard class="tw-my-6" />
        <div class="grid-1 tw-gap-y-6">
          <div v-for="(item, i) in ProfilesDatas" :key="i" class="fcb">
            <div class="text-primary-200">
              {{ item.title }}
            </div>
            <div class="text-secondary">
              {{ item.subtitle }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
