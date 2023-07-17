<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { useConfig } from '@/store';
import { useRouter } from 'vue-router';
import Avatar from '@/assets/img/avatar.png';

/** Config Store */
const configStore = useConfig();

const router = useRouter()

const { mobile } = useDisplay();

const isDarkMode = ref(configStore.theme);
const modalLogout = ref(false)
</script>

<template>
  <v-menu :close-on-content-click="false" :min-width="mobile ? 300 : 400" class="tw-rounded-md font-open-sans">
    <template #activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar :size="mobile ? 35 : 'large'" :image="Avatar" />
      </v-btn>
    </template>
    <v-card border :width="mobile ? 300 : 400" color="background-1" class="shadow-menu-profile tw-mt-4">
      <v-card-text>
        <div class="fcs tw-gap-4 tw-pb-4">
          <v-avatar :image="Avatar" :size="mobile ? 62 : 72" />
          <div>
            <h3 class="tw-font-bold tw-text-sm md:tw-text-base">Muhammad Iqra Djauhari</h3>
            <p class="mt-1 tw-mb-2 tw-text-xs md:tw-text-sm tw-text-[#808D93]">
              iqra@elabram.com
            </p>
            <v-chip :size="mobile ? 'x-small' : 'small'" color="primary-600">Employe</v-chip>
          </div>
        </div>
        <v-divider class="tw-my-2 tw-opacity-50" />
        <v-btn variant="text" prepend-icon="mdi-account-outline">
          <template #prepend>
            <v-icon color="primary-600" />
          </template>
          <div class="tw-font-semibold tw-text-xs md:tw-text-sm">My Profile</div>
        </v-btn>
        <v-divider class="tw-my-2 tw-opacity-50" />
        <div class="tw-px-3">
          <!-- Toggle Dark mode -->
          <div class="tw-text-[10px] md:tw-text-xs tw-text-[#808D93]">Apperance</div>
          <div class="fcb">
            <div class="tw-font-semibold tw-text-xs md:tw-text-sm">Dark Mode</div>
            <div>
              <v-switch v-model="isDarkMode" density="compact" hide-details inset size
                @update:model-value="configStore.toggleTheme" />
            </div>
          </div>
        </div>
        <v-divider class="tw-my-2 tw-opacity-50" />
        <v-btn variant="text" prepend-icon="mdi-logout" @click="modalLogout = true">
          <template #prepend>
            <v-icon color="primary-600" />
          </template>
          <div class="tw-font-semibold tw-text-xs md:tw-text-sm">Logout</div>
        </v-btn>


        <v-dialog v-model="modalLogout" width="300">
          <v-card>
            <v-card-text>
              <b>
                Are you sure want Logout ?
              </b>
            </v-card-text>
            <v-card-actions class="tw-justify-end">
              <v-btn color="secondary" border variant="text" @click="modalLogout = false">
                Cancel
              </v-btn>
              <v-btn color="error" variant="flat" @click="() => {
                router.push({name: 'Login'})
              }">
                Logout
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<style>
.v-selection-control__wrapper {
  color: #b6bbd0;
}
</style>
