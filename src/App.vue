<script setup lang="ts">
import { useGlobal, useConfig } from '@/store';
import {
  computed,
  onMounted,
  ref,
  watch,
  type ComputedRef,
  type Ref,
  type WritableComputedRef,
} from 'vue';
import { useRoute } from 'vue-router';

// import { useTheme } from 'vuetify';

// Components
// import logo from '@/assets/logo.svg';
import AppBarMenuComponent from '@/components/AppBarMenuComponent.vue';
import DrawerComponent from '@/components/DrawerComponent.vue';

/** Vuetify Theme */
// const theme = useTheme();

const route = useRoute();

const checkShowNavbar = () => {
  let show = true;
  if (route.meta.group == 'Auth') {
    show = false;
  }

  return show;
};

/** Global Store */
const globalStore = useGlobal();

/** Config Store */
const configStore = useConfig();

/** Title */
const title = import.meta.env.VITE_APP_TITLE ?? 'Vuetify3 Application';

/** drawer visibility */
const drawer: Ref<boolean> = ref(false);

/** loading overlay visibility */
const loading: WritableComputedRef<boolean> = computed({
  get: () => globalStore.loading,
  set: v => globalStore.setLoading(v),
});

/** Appbar progressbar value */
const progress: ComputedRef<number | null> = computed(
  () => globalStore.progress
);

/** Snackbar visibility */
const snackbarVisibility: Ref<boolean> = ref(false);

/** Snackbar text */
// const snackbarText: ComputedRef<string> = computed(() => globalStore.message);

/** Toggle Dark mode */
const isDark: ComputedRef<string> = computed(() =>
  configStore.theme ? 'dark' : 'light'
);

// When snackbar text has been set, show snackbar.
watch(
  () => globalStore.message,
  message => (snackbarVisibility.value = message !== '')
);

/** Clear store when snackbar hide */
// const onSnackbarChanged = async () => {
//   globalStore.setMessage();
//   await nextTick();
// };

onMounted(() => {
  document.title = title;
});
</script>

<template>
  <v-app :theme="isDark">
    <v-navigation-drawer v-if="checkShowNavbar()" v-model="drawer" temporary>
      <drawer-component />
    </v-navigation-drawer>

    <v-app-bar v-if="checkShowNavbar()">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title tag="h1">{{ title }}</v-app-bar-title>
      <v-spacer />
      <app-bar-menu-component />
      <v-progress-linear
        v-show="loading"
        :active="loading"
        :indeterminate="progress === null"
        :model-value="progress !== null ? progress : 0"
        color="blue-accent-3"
      />
    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.name" class="tw-tracking-wide" />
      </router-view>
    </v-main>

    <!-- <v-overlay v-model="loading" app class="justify-center align-center">
      <v-progress-circular indeterminate size="64" />
    </v-overlay> -->

    <!-- <v-snackbar
      v-model="snackbarVisibility"
      @update:model-value="onSnackbarChanged"
    >
      {{ snackbarText }}
      <template #actions>
        <v-btn icon="mdi-close" @click="onSnackbarChanged" />
      </template>
    </v-snackbar> -->
  </v-app>
  <!-- <teleport to="head">
    <meta
      name="theme-color"
      :content="theme.computedThemes.value[isDark].colors.primary"
    />
    <link rel="icon" :href="logo" type="image/svg+xml" />
  </teleport> -->
</template>

<style>
.v-btn {
  text-transform: capitalize !important;
  letter-spacing: 0.7px !important;
}
</style>