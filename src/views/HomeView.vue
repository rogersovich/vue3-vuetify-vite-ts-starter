<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <v-container>
    <hello-world msg="⚡Hello Vue 3.3 + Vuetify 3 + TypeScript + Vite⚡" />
  </v-container>
  <teleport to="head">
    <meta
      name="keyword"
      content="template,typescript,vue3,vuetify,vite,vite-template,volar"
    />
    <meta name="description" content="Vite Vue3 Vuetify TypeScript Demo" />
  </teleport>
</template>
