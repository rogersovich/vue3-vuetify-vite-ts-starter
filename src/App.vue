<script setup lang="ts">
import { useGlobal, useConfig } from '@/store';
import {
  computed,
  onMounted,
  ref,
  watch,
  type ComputedRef,
  type Ref,
} from 'vue';
import { useRoute } from 'vue-router';
import { onClickOutside } from '@vueuse/core';

// import { useTheme } from 'vuetify';

// Components
import RightAppBar from '@/components/general/RightAppBar.vue';
import NavbarComponent from '@/components/general/NavbarComponent.vue';
import SubNav from '@/components/general/SubNav.vue';
import IconAxdif from '@/assets/img/logo-axdif-small.png';
import type { TChildNav } from './types/navbar';
import { useDisplay } from 'vuetify';

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

const { mobile } = useDisplay();

/** Title */
const title = import.meta.env.VITE_APP_TITLE ?? 'Vuetify3 Application';

/** drawer visibility */
// const drawer: Ref<boolean> = ref(false);

/** loading overlay visibility */
// const loading: WritableComputedRef<boolean> = computed({
//   get: () => globalStore.loading,
//   set: v => globalStore.setLoading(v),
// });

/** Appbar progressbar value */
// const progress: ComputedRef<number | null> = computed(
//   () => globalStore.progress
// );

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

// Navbar
const subNavOutside = ref(null);
const showSubNav: Ref<boolean> = ref(false);
const titleNav: Ref<string> = ref('');
const subNavOptions: Ref<TChildNav[]> = ref([]);
const onToggleSubNav = ({
  title,
  children,
}: {
  title: string;
  children: TChildNav[];
}) => {
  subNavOptions.value = children;
  titleNav.value = title;
  showSubNav.value = !showSubNav.value;
};

onClickOutside(subNavOutside, event => (showSubNav.value = false));

onMounted(() => {
  document.title = title;
});
</script>

<template>
  <v-app :theme="isDark" class="tw-relative">
    <v-app-bar
      v-if="checkShowNavbar()"
      density="comfortable"
      color="background"
      class="tw-shadow-md tw-sticky tw-top-0"
      :height="mobile ? 80 : 100"
      name="app-bar"
    >
      <div
        class="tw-flex tw-items-center tw-justify-between tw-w-full tw-px-2 md:tw-px-4"
      >
        <v-app-bar-title>
          <div
            class="tw-flex tw-justify-start tw-items-center tw-gap-4 md:tw-gap-6"
          >
            <div class="container-logo-dashboard bg-background">
              <v-img :src="IconAxdif" :height="40" :width="40" />
            </div>
            <v-divider v-if="!mobile" class="tw-opacity-100 tw-my-3" vertical />
            <NavbarComponent @toggle-sub-nav="val => onToggleSubNav(val)" />
          </div>
        </v-app-bar-title>

        <RightAppBar />
      </div>
    </v-app-bar>

    <SubNav
      v-if="showSubNav"
      ref="subNavOutside"
      :nav-children="subNavOptions"
      :title="titleNav"
    />

    <v-main class="tw-p-0">
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
  letter-spacing: 0.5px !important;
}
.v-field__outline {
  color: #888fb0;
}

/* .v-text-field ::placeholder {
  color: #888fb0 !important;
}
.v-text-field input {
  color: #6e7da5 !important;
}
.v-select .v-select__selection {
  color: #6e7da5 !important;
}
.v-field__append-inner {
  color: #6e7da5 !important;
}
.v-selection-control__input > .v-icon {
  color: #6e7da5 !important;
}

.mdi-checkbox-marked::before {
  color: #0796e5;
} */
</style>
