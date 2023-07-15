<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="tw-p-4">
    <v-btn variant="flat" color="primary-600" @click="router.push('Register')">
      To Register
    </v-btn>
  </div>
</template>

<style scoped></style>
