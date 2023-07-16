<script setup lang="ts">
import { ref } from 'vue';
import { useConfig } from '@/store';
import Avatar from '@/assets/img/avatar.png';

/** Config Store */
const configStore = useConfig();

const isDarkMode = ref(configStore.theme);
</script>

<template>
  <v-menu
    :close-on-content-click="false"
    min-width="400px"
    class="tw-rounded-md font-open-sans"
  >
    <template #activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar size="large" :image="Avatar" />
      </v-btn>
    </template>
    <v-card
      width="400px"
      color="background"
      class="shadow-menu-profile tw-mt-4"
    >
      <v-card-text>
        <div class="fcs tw-gap-4 tw-pb-4">
          <v-avatar :image="Avatar" size="72" />
          <div>
            <h3 class="tw-font-bold tw-text-base">Muhammad Iqra Djauhari</h3>
            <p class="mt-1 tw-mb-2 tw-text-sm tw-text-[#808D93]">
              iqra@elabram.com
            </p>
            <v-chip size="small" color="primary-600">Employe</v-chip>
          </div>
        </div>
        <v-divider class="tw-my-2 tw-opacity-50" />
        <v-btn variant="text" prepend-icon="mdi-account-outline">
          <template #prepend>
            <v-icon color="primary-600" />
          </template>
          <div class="tw-font-semibold">My Profile</div>
        </v-btn>
        <v-divider class="tw-my-2 tw-opacity-50" />
        <div class="tw-px-3">
          <!-- Toggle Dark mode -->
          <div class="tw-text-xs tw-text-[#808D93]">Apperance</div>
          <div class="fcb">
            <div class="tw-font-semibold">Dark Mode</div>
            <div>
              <v-switch
                v-model="isDarkMode"
                density="compact"
                hide-details
                inset
                size
                @update:model-value="configStore.toggleTheme"
              />
            </div>
          </div>
        </div>
        <v-divider class="tw-my-2 tw-opacity-50" />
        <v-btn variant="text" prepend-icon="mdi-logout">
          <template #prepend>
            <v-icon color="primary-600" />
          </template>
          <div class="tw-font-semibold">Logout</div>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<style>
.v-selection-control__wrapper {
  color: #b6bbd0;
}
</style>
